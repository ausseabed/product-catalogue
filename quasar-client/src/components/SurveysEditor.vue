<template>

  <div>
    <div
      class="q-md q-gutter-sm"
      v-if="surveys.errorMessages.length>0"
    >
      <q-banner
        inline-actions
        class="text-white bg-red"
      >
        {{surveys.errorMessages.slice(-1)[0]}}

      </q-banner>
    </div>
    <q-table
      style="height: 400px border-collapse:collapse"
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
            <!-- <q-checkbox v-model="props.selected" /> -->
            <q-btn
              flat
              @click="() => toggleEditMode(props.row, props.selected)"
              round
              color="white"
              text-color="black"
              :icon="props.selected? matDone: matEdit"
            />

          </q-td>
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
          <q-td
            :props="props"
            key="products"
          >
            <div
              class="q-gutter-xs row truncate-chip-labels"
              style="max-width: 300px"
            >
              <q-chip
                v-for="item in productsFor(props.row.id)"
                class="glossy"
                color="orange"
                text-color="white"
                removable
                :label="item.productName"
                :title="item.productName"
                :key="item.productId"
              />
              <router-link
                :to="{ name: 'survey-l3-relation', params: { surveyId: props.row.id} }"
                style="text-decoration: none; color: inherit;"
              >

                <div v-if="!props.selected">
                  {{ props.row.products }}
                  <!-- to="/survey-l3-relation" -->
                  <q-btn
                    label='Add L3'
                    color="primary"
                  />
                </div>
              </router-link>
            </div>
          </q-td>
          <q-td width='15px'>
            <q-btn
              flat
              @click="() => removeRow(props.row)"
              round
              color="white"
              text-color="black"
              :icon="matDelete"
            />
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
          label="Add Survey"
          @click="newSurvey"
          :selected="[]"
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
<style lang="sass" scoped>
.truncate-chip-labels > .q-chip
  max-width: 140px
</style>
<script lang="ts">
import { matSearch, matEdit, matDone, matDelete } from '@quasar/extras/material-icons'
import { Survey, RelationSummaryDto } from '@ausseabed/product-catalogue-rest-client'
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
  @State('surveys') surveys!: SurveyStateInterface

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Action('fetchData', { namespace }) fetchData!: any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Action('newSurvey', { namespace }) newSurvey!: any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Action('deleteSurvey', { namespace }) removeRow!: any

  // @Action('updateEntry', { namespace }) update!: any

  update (row: number, element: UpdateRowKnownTypes, value: string) {
    const dir: UpdateRowInterface = {
      rowId: row,
      elementName: element,
      elementValue: value
    }
    this.$store.dispatch('surveys/updateEntry', dir)
  }

  toggleEditMode (selectedRow: Survey, selected: boolean) {
    if (selected) {
      this.$data.selected = []
    } else {
      this.$data.selected = [selectedRow]
    }
  }

  productsFor (surveyId: number): RelationSummaryDto[] {
    const matches: RelationSummaryDto[] = this.surveys.productShortDescription.filter(haystack => haystack.surveyId === surveyId)
    return matches
  }

  mounted () {
    this.fetchData()
  }

  data () {
    return {
      filter: '',
      matSearch: matSearch,
      matDone: matDone,
      matEdit: matEdit,
      matDelete: matDelete,
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
        { name: 'year', label: 'Year', field: 'year', align: 'left', sortable: true },
        { name: 'products', label: 'Products', field: 'products', align: 'left' },
        { name: 'remove', label: '', field: 'remove', align: 'left' }
      ]
    }
  }
}
</script>
