<template>
  <div>
    <q-input
      class="q-ml-md"
      :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.srs"
      @input="valuedef=>updateProduct( {element:'srs',value: valuedef})"
      label="Spatial Reference System"
    >
      <q-popup-edit
        ref='qPopupEditDialog'
        buttons
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.srs"
        @input="valuedef=>updateProduct( {element:'srs',value: valuedef})"
        @before-show="srsMakeSelection"
        @cancel="srsCancel"
      >
        <q-table
          style="height: 30rem"
          :data="srsOptions"
          :columns="srsColumns"
          row-key="Code"
          selection="single"
          auto-save="true"
          :rows-per-page-options="[0]"
          @selection="(details) => { filterBySelectionSrs(details); $refs.qPopupEditDialog.set()}"
          :selected.sync="selectedSrs"
          virtual-scroll
          :pagination.sync="pagination"
        >
          <template v-slot:top>
            <div class="col">
              <div class="q-table__title">Select Spatial Reference System</div>
            </div>
            <div class="q-pa-lg">
              <q-option-group
                v-model="srsSearchOption"
                :options="srsSearchOptions"
                @input="_ => filterFn(filterSRS)"
                color="primary"
                inline
              />
            </div>
            <q-space />
            <q-input
              border
              outlined
              dense
              debounce="300"
              color="primary"
              v-model="filterSRS"
              @input="filterFn"
            >
              <template v-slot:append>
                <q-icon :name="matSearch" />
              </template>
            </q-input>
          </template>
        </q-table>
      </q-popup-edit>
    </q-input>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Mutation, State } from 'vuex-class'
import { SurveyL3RelationStateInterface } from '../store/survey-l3-relation/state'
import { matSearch } from '@quasar/extras/material-icons'
import rs from '../statics/reference-system.json'

type SrsSearchCategories = 'geographic' | 'projected' | 'gda' | 'wgsutm' | 'all' | 'mga'

interface SearchRecordInterface {
  Area: string;
  Code: number;
  DataSource: string;
  Deprecated: boolean;
  Links: {
    href: string;
    rel: string;
  }[];
  Name: string;
  Remarks: string;
  RevisionDate: string;
  Type: string;
}
const srsSearchFilters = {
  geographic: (srsOptionList: SearchRecordInterface[]) => { return srsOptionList.filter(v => v.Type === 'geographic 2D') },
  projected: (srsOptionList: SearchRecordInterface[]) => { return srsOptionList.filter(v => v.Type === 'projected') },
  gda: (srsOptionList: SearchRecordInterface[]) => { return srsOptionList.filter(v => (v.Type === 'geographic 2D') && v.Area === 'Australia - GDA') },
  wgsutm: (srsOptionList: SearchRecordInterface[]) => { return srsOptionList.filter(v => v.Name.includes('WGS 84 / UTM')) },
  mga: (srsOptionList: SearchRecordInterface[]) => { return srsOptionList.filter(v => v.Name.includes('MGA zone')) },
  all: (srsOptionList: SearchRecordInterface[]) => { return srsOptionList }
}
const srsOptionsBasis: SearchRecordInterface[] = rs.Results as SearchRecordInterface[]

const SpatialReferenceProps = Vue.extend({
  props: {
    srs: {
      type: String,
      required: true
    }
  }
})
const namespace = 'surveyl3relation'

@Component
export default class SpatialReference extends SpatialReferenceProps {
  @State('surveyl3relation') surveyL3Relation!: SurveyL3RelationStateInterface

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Mutation('updateProduct', { namespace }) updateProduct!: any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterBySelectionSrs (details: any) {
    if (details === undefined || details.rows.length === 0) {
      return
    }
    const code = 'EPSG:' + details.rows[0].Code
    this.updateProduct({ element: 'srs', value: code })
  }

  srsMakeSelection () {
    this.filterSRS = ''
    this.filterFn(this.filterSRS)
    if (this.srs !== undefined || this.srs !== '') {
      const matches = srsOptionsBasis.filter(v => 'EPSG:' + v.Code === this.srs)
      if (matches.length > 0) {
        this.selectedSrs = [matches[0]]
        return
      }
    }
    this.selectedSrs = []
  }

  filterFn (val: string) {
    const needle = val.toLowerCase()
    this.srsOptions = srsSearchFilters[this.srsSearchOption](srsOptionsBasis).filter(
      (v: SearchRecordInterface) => v.Name.toLowerCase().includes(needle) ||
        String(v.Code).includes(needle)
    )
  }

  srsCancel () {
    console.log('cancel')
    this.srsMakeSelection()
    this.filterSRS = ''
  }

  srsOptions = srsOptionsBasis
  srsSearchOption: SrsSearchCategories = 'all'
  loading = false
  selectedSrs: SearchRecordInterface[] = []
  filterSRS = ''

  data () {
    return {
      matSearch: matSearch,
      pagination: {
        rowsPerPage: 100
      },
      srsColumns: [
        {
          name: 'Code',
          label: (row: SearchRecordInterface) => { return 'EPSG:' + row.Code },
          field: (row: SearchRecordInterface) => { return 'EPSG:' + row.Code },
          align: 'left',
          sortable: true
        },
        { name: 'Name', label: 'Name', field: 'Name', align: 'left', sortable: true }
      ],
      srsSearchOptions: [
        {
          label: 'Geographic',
          value: 'geographic'
        },
        {
          label: 'Projected',
          value: 'projected'
        },
        {
          label: 'Australia - GDA',
          value: 'gda'
        },
        {
          label: 'MGA',
          value: 'mga'
        },
        {
          label: 'WGS 84 / UTM',
          value: 'wgsutm'
        },
        {
          label: 'All',
          value: 'all'
        }
      ]
    }
  }
}
</script>
