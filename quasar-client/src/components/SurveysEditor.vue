<template>

  <div class="q-pa-md">
    <div
      class="q-md q-gutter-sm"
      v-if="surveys.errorMessages.length>0"
    >
      <q-banner
        inline-actions
        class="text-white bg-red"
      >
        {{surveys.errorMessages.slice(-1)[0]}}
        <!--
        <template v-slot:action>
          <q-btn
            flat
            color="white"
            label="Turn ON Wifi"
          />
        </template>
        -->
      </q-banner>
    </div>
    <q-table
      style="height: 400px"
      title="Surveys"
      :data="surveys.surveys"
      :columns="columns"
      row-key="id"
      selection="single"
      :rows-per-page-options="[0]"
      virtual-scroll
      :pagination.sync="pagination"
      :selected.sync="selected"
      separator="cell"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>
            <!-- add this line -->
            <q-checkbox v-model="props.selected" /><!-- add this line -->
          </q-td> <!-- add this line -->
          <q-td
            :props="props"
            key="UUID"
          >
            <div v-if="!props.selected">
              {{ props.row.uuid}}
            </div>
            <div v-if="props.selected">
              <q-input
                :value="props.row.uuid"
                @input="value => update(props.row.id, 'uuid', value)"
                debounce="500"
                dense
                autofocus
                counter
              />
            </div>
          </q-td>
          <q-td
            :props="props"
            key="surveyName"
          >
            <div v-if="!props.selected">
              {{ props.row.name }}
            </div>
            <div v-if="props.selected">
              <q-input
                :value="props.row.name"
                @input="value => update(props.row.id, 'name', value)"
                debounce="500"
                dense
                autofocus
                counter
              />
            </div>
          </q-td>
          <q-td
            :props="props"
            key="year"
          >
            <div v-if="!props.selected">
              {{ props.row.year }}
            </div>
            <div v-if="props.selected">
              <q-input
                :value="props.row.year"
                @input="value => update(props.row.id, 'year', value)"
                debounce="500"
                dense
                autofocus
                counter
              />
            </div>
          </q-td>
        </q-tr>
      </template>

      <template v-slot:top>
        <div class="col">
          <div class="q-table__title">Surveys</div>
        </div>
        <q-btn
          color="primary"
          :disable="loading"
          label="Add Dataset"
          @click="addRow"
          :selected="[]"
        />
        <q-btn
          class="q-ml-sm"
          color="primary"
          :disable="loading"
          label="Remove Dataset"
          @click="removeRow"
        />
        <q-space />
        <q-input
          class="q-ml-sm"
          border
          dense
          outlined
          debounce="300"
          color="primary"
          label="placeholder"
          v-model="filter"
        >
          <template v-slot:append>
            <q-icon :name="matSearch" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>

</template>

<script lang="ts">
import { matSearch } from '@quasar/extras/material-icons'
import { Survey } from '@ausseabed/product-catalogue-rest-client'
// import { mapState } from 'vuex'
// import { StoreInterface } from '../store'

import Vue from 'vue'
import { State, Action } from 'vuex-class'
import Component from 'vue-class-component'
import { SurveyStateInterface } from '../store/surveys/state'
import { UpdateRowInterface, UpdateRowKnownTypes } from '../store/surveys/actions'
const namespace = 'surveys'

@Component
export default class SurveysEditor extends Vue {
  // @Getter('surveys') surveys: Survey[]
  @State('surveys') surveys!: SurveyStateInterface
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Action('fetchData', { namespace }) fetchData!: any
  // @Action('updateEntry', { namespace }) update!: any

  update (row: number, element: UpdateRowKnownTypes, value: string) {
    const dir: UpdateRowInterface = {
      rowId: row,
      elementName: element,
      elementValue: value
    }
    this.$store.dispatch('surveys/updateEntry', dir)
  }

  // props: {
  //   surveys2: {
  //     type: Array,
  //     required: true
  //   }
  // }
  // mapState({
  //   surveys: (state: StoreInterface) => state.surveys.surveys
  //   // selectedProduct: (state: StoreInterface) => state.surveys.selectedProduct,
  //   // countAlias: ['data', 'selectedProduct']
  // }),
  mounted () {
    this.fetchData()
  }

  addRow () {
    // this.selected = []
    // this.$store.dispatch('product/addEmptyRowAction')
  }

  removeRow () {
    // this.selected = []
  }
  // created () {
  //   this.matSearch = matSearch
  // }

  data () {
    return {
      filter: '',
      matSearch: matSearch,
      loading: false,
      pagination: {
        rowsPerPage: 100
      },
      selected: [],
      columns: [
        {
          name: 'UUID',
          required: true,
          label: 'UUID',
          align: 'left',
          field: (row: Survey) => row.uuid,
          // format: val => `${val}`,
          sortable: true
        },
        { name: 'surveyName', label: 'Survey Name', field: 'name', align: 'left', sortable: true },
        { name: 'year', label: 'Year', field: 'year', align: 'left', sortable: true }
      ]
    }
  }
}
</script>
