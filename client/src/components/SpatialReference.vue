<template>
  <div>
    <div class="q-ml-md">
      <div class="row">
        <div class="col col-md-auto cursor-pointer">
          <div class="q-my-md">
            <q-icon
              :name="matSearch"
              style="font-size: 2rem;"
            />
          </div>
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
        </div>
        <div class="col">
          <datalist id="autosuggestSrs">
            <option
              v-for="srs in Array.from(new Set(surveyL3Relation.suggestions.srs))"
              :key="srs"
            >{{srs}}</option>
          </datalist>
          <q-input
            class="q-ml-md"
            :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.srs"
            @input="valuedef=>updateProduct( {element:'srs',value: valuedef})"
            label="Spatial Reference System"
            list='autosuggestSrs'
          />
        </div>
        <div class="col q-ma-md col-md-auto">
          {{srsName}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Mutation, State } from 'vuex-class'
import { SurveyL3RelationStateInterface } from '../store/survey-l3-relation/state'
import { matSearch } from '@quasar/extras/material-icons'
import { SearchRecordInterface, ReferenceSystem } from '../lib/reference-system'
import { UpdateProductKnownTypes } from '../store/survey-l3-relation/mutations'

type SrsSearchCategories = 'geographic' | 'projected' | 'gda' | 'wgsutm' | 'all' | 'mga'

const srsSearchFilters = {
  geographic: (srsOptionList: SearchRecordInterface[]) => { return srsOptionList.filter(v => v.Type === 'geographic 2D') },
  projected: (srsOptionList: SearchRecordInterface[]) => { return srsOptionList.filter(v => v.Type === 'projected') },
  gda: (srsOptionList: SearchRecordInterface[]) => { return srsOptionList.filter(v => (v.Type === 'geographic 2D') && v.Area === 'Australia - GDA') },
  wgsutm: (srsOptionList: SearchRecordInterface[]) => { return srsOptionList.filter(v => v.Name.includes('WGS 84 / UTM')) },
  mga: (srsOptionList: SearchRecordInterface[]) => { return srsOptionList.filter(v => v.Name.includes('MGA zone')) },
  all: (srsOptionList: SearchRecordInterface[]) => { return srsOptionList }
}
const srsOptionsBasis: SearchRecordInterface[] = ReferenceSystem

const namespace = 'surveyl3relation'

@Component(
  {
    props: {
      srs: {
        type: String,
        required: true
      }
    }
  }
)
export default class SpatialReference extends Vue {
  @State('surveyl3relation') surveyL3Relation!: SurveyL3RelationStateInterface

  @Mutation('updateProduct', { namespace }) updateProduct!: (elementValuePair: { element: UpdateProductKnownTypes; value: string }) => void

  filterBySelectionSrs (details: undefined | { rows: [{ Code: string }] | [] }) {
    if (details === undefined || details.rows === undefined || details.rows.length === 0) {
      return
    }
    const code = `EPSG:${details.rows[0].Code}`
    this.updateProduct({ element: 'srs', value: code })
  }

  srsMakeSelection () {
    this.filterSRS = ''
    this.filterFn(this.filterSRS)
    if (this.$props.srs !== undefined || this.$props.srs !== '') {
      const matches = srsOptionsBasis.filter(v => `EPSG:${v.Code}` === this.$props.srs)
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

  get srsName (): string {
    if (this.$props.srs !== undefined || this.$props.srs !== '') {
      const matches = srsOptionsBasis.filter(v => `EPSG:${v.Code}` === this.$props.srs)
      if (matches.length > 0) {
        return matches[0].Name + ' (' + matches[0].Type + ')'
      }
    }
    return ''
  }

  data () {
    return {
      matSearch: matSearch,
      pagination: {
        rowsPerPage: 100
      },
      srsColumns: [
        {
          name: 'Code',
          label: (row: SearchRecordInterface) => { return `EPSG:${row.Code}` },
          field: (row: SearchRecordInterface) => { return `EPSG:${row.Code}` },
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
