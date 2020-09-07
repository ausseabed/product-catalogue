<template>
  <div class="column justify-center">
    <div class="col-auto">
      <div
        class="q-md q-gutter-sm"
        v-if="surveys.errorMessages.length>0"
      >
        <q-banner
          inline-actions
          class="text-white bg-red"
        >
          {{surveys.errorMessages.slice(-1)[0]}}
          <template v-slot:action>
            <q-btn
              flat
              label="Dismiss"
              @click="clearErrorMessages"
            />
          </template>
        </q-banner>
      </div>
    </div>
    <div class="col">
      <q-table
        class="my-sticky-virtscroll-table"
        style="height: calc(100vh - 98px)"
        table-class="survey"
        title="Surveys"
        :data="surveys.surveys"
        :columns="columns"
        row-key="id"
        selection="single"
        :rows-per-page-options="[0]"
        virtual-scroll
        :virtual-scroll-sticky-size-start="48"
        :pagination.sync="pagination"
        :selected.sync="selected"
        separator="cell"
        @virtual-scroll="virtualScrollPosition"
        ref="table"
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
              <div
                v-if="!props.selected"
                style="max-width:8em;white-space: normal;word-wrap: break-word"
              >
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
              <div
                v-if="!props.selected"
                style="min-width:10em;white-space: normal;"
              >
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
                class='row reverse'
                style="white-space: normal"
              >
                <div class="col-shrink">

                  {{ props.row.products }}
                  <!-- to="/survey-l3-relation" -->
                  <q-btn
                    label='Add L3'
                    color="primary"
                    @click="() => createProductInternal(props.row.id)"
                  />
                </div>

                <div class="col-grow" />
                <div
                  class="q-gutter-xs col truncate-chip-label"
                  style="white-space: normal"
                  v-if='productsFor(props.row.id).length>2'
                >
                  <span
                    v-for="item in productsFor(props.row.id)"
                    :key="item.productId"
                  >
                    <q-chip
                      class="glossy"
                      color="orange"
                      text-color="white"
                      clickable
                      removable
                      :title="item.productName"
                      @click="() => editProduct(item.relationId)"
                      @remove="() => deleteProductDialogue(item.productName, item.productId)"
                    >
                      <template v-slot:default>
                        <span
                          class="ellipsis"
                          style='max-width:8em;direction: rtl;text-align: left;'
                        >{{item.productName}}</span>
                      </template>
                    </q-chip>
                  </span>
                </div>
                <div
                  class="q-gutter-xs col truncate-chip-label"
                  style="white-space: normal"
                  v-if='productsFor(props.row.id).length<=2'
                >
                  <span
                    v-for="item in productsFor(props.row.id)"
                    :key="item.productId"
                  >
                    <q-chip
                      class="glossy"
                      color="orange"
                      text-color="white"
                      clickable
                      removable
                      :title="item.productName"
                      @click="() => editProduct(item.relationId)"
                      @remove="() => deleteProductDialogue(item.productName, item.productId)"
                    >
                      <template v-slot:default>
                        <span
                          class="ellipsis"
                          style='max-width:20em;direction: rtl;text-align: left;'
                        >{{item.productName}}</span>
                      </template>
                    </q-chip>
                  </span>
                </div>
              </div>
            </q-td>
            <q-td width='15px'>
              <q-btn
                flat
                @click="() => removeRowDialogue(props.row.name, props.row)"
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
            @click="() => {newSurvey().then(row =>  scrollToRow(row))}"
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
  </div>
</template>
<style lang="sass">
// .survey tr > *:nth-child(1)
//   width: 1cm

// .survey tr > *:nth-child(5)
//   width: 10rem

.my-sticky-virtscroll-table
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0
</style>
<style lang="sass" scoped>
.truncate-chip-labels > .q-chip
  max-width: 140px
</style>
<script lang="ts">
import { matSearch, matEdit, matDone, matDelete } from '@quasar/extras/material-icons'
import { Survey } from '@ausseabed/product-catalogue-rest-client'
import { RelationSummaryDto } from '@ausseabed/product-catalogue-rest-client/models/RelationSummaryDto'
// import { mapState } from 'vuex'
// import { StoreInterface } from '../store'
// import { Dialog } from 'quasar'

import Vue from 'vue'
import { State, Action, Mutation } from 'vuex-class'
import Component from 'vue-class-component'
import { SurveyStateInterface } from '../store/surveys/state'
import { UpdateRowInterface, UpdateRowKnownTypes } from '../store/surveys/actions'
import { QTable } from 'quasar'
const namespace = 'surveys'

@Component
export default class SurveysEditor extends Vue {
  virtualScrollPosition (details: { index: number }) {
    // console.log(details)
    this.viewedSelection = details.index
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
  @State('surveys') surveys!: SurveyStateInterface

  @Action('fetchData', { namespace }) fetchData!: () => Promise<void>

  @Action('newSurvey', { namespace }) newSurvey!: () => Promise<void>

  @Mutation('clearErrorMessagesMutation', { namespace }) clearErrorMessages!: () => void

  @Action('deleteSurvey', { namespace }) removeRow!: (payload: Survey) => Promise<void>

  removeRowDialogue (deleteText: string, argList: Survey) {
    this.$q.dialog({
      title: 'Confirm',
      message: `Are you sure you want to permanently delete '${deleteText}'?`,
      cancel: true,
      persistent: true
    }).onOk(async () => {
      await this.removeRow(argList)
    })
  }

  @Action('createProduct', { namespace }) createProduct!: (surveyId: number) => Promise<number>

  @Action('deleteProduct', { namespace }) deleteProduct!: (productId: number) => Promise<void>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteProductDialogue (deleteText: string, argList: any) {
    this.$q.dialog({
      title: 'Confirm',
      message: `Are you sure you want to permanently delete '${deleteText}'?`,
      cancel: true,
      persistent: true
    }).onOk(async () => {
      await this.deleteProduct(argList)
    })
  }
  // @Action('updateEntry', { namespace }) update!: any

  update (row: number, element: UpdateRowKnownTypes, value: string) {
    const dir: UpdateRowInterface = {
      rowId: row,
      elementName: element,
      elementValue: value
    }
    this.$store.dispatch('surveys/updateEntry', dir).catch((e) => { console.log(e) })
  }

  scrollToRow (selectedRow: Survey) {
    const table = this.$refs.table as QTable
    // eslint-disable-next-line
    const index = (table as any).computedRows.map((e: Survey) => e.id).indexOf(selectedRow.id)
    table.scrollTo(index)
    this.toggleEditMode(selectedRow, false)
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

  // <router-link :to="{ name: 'survey-l3-relation', params: { surveyId: props.row.id} }" style="text-decoration: none; color: inherit;" >
  async createProductInternal (surveyId: number) {
    const relationId = await this.createProduct(surveyId)
    this.$router.push(
      {
        name: 'survey-l3-relation',
        params: {
          relationId: String(relationId)
        }
      }
    ).catch((e) => { console.log(e) })
  }

  editProduct (relationId: number) {
    this.$router.push(
      {
        name: 'survey-l3-relation',
        params: {
          relationId: String(relationId)
        }
      }
    ).catch((e) => { console.log(e) })
  }

  async mounted () {
    await this.fetchData()
    // the virtual-scroll position of the table does not appear to be saved as part of keep-alive
    if (this.$route.query.surveyId) {
      const surveyId = parseInt(String(this.$route.query.surveyId))
      const table = this.$refs.table as QTable
      // eslint-disable-next-line
      const index = (table as any).computedRows.map((e: Survey) => e.id).indexOf(surveyId)
      if (index) {
        table.scrollTo(index)
      }
    }
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
        sortBy: 'surveyName',
        rowsPerPage: 100
      },
      selected: [],
      viewedSelection: 0,
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
