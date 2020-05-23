<template>
  <div class="q-pa-md">
    <q-table
      style="height: 400px"
      title="Surveys and Compilations"
      :data="surveys.surveys"
      :columns="columns"
      row-key="id"
      selection="single"
      :rows-per-page-options="[0]"
      virtual-scroll
      :pagination.sync="pagination"
      :selected.sync="selected"
    >
      <template v-slot:top>
        <div class="col">
          <div class="q-table__title">Surveys and Compilations</div>
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
          borderless
          dense
          debounce="300"
          color="primary"
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
const namespace = 'surveys'

@Component
export default class SurveysEditor extends Vue {
  // @Getter('surveys') surveys: Survey[]
  @State('surveys') surveys!: SurveyStateInterface
  @Action('fetchData', { namespace }) fetchData!: any
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

  // created () {
  //   this.matSearch = matSearch
  // }

  data () {
    return {
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
        { name: 'gazeteerName', label: 'Gazeteer', field: 'name', align: 'left', sortable: true },
        { name: 'year', label: 'Year', field: 'year', align: 'left', sortable: true }
      ]
    }
  }
}
</script>
