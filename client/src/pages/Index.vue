<template>
  <q-page class="flex">
    <div class="col">
      <div
        class="q-pa-md"
        v-if="data.length==0"
      >
        <q-spinner
          color="primary"
          size="3em"
          :thickness="10"
        />
      </div>
      <div
        class="q-pa-md"
        v-if="data.length>0"
      >
        <q-table
          style="height: 400px"
          title="Datasets"
          :data="data"
          :columns="columns"
          row-key="id"
          selection="single"
          :rows-per-page-options="[0]"
          virtual-scroll
          :pagination.sync="pagination"
          :selected.sync="selected"
          @selection="filterBySelection"
        >
          <template v-slot:top>
            <div class="col">
              <div class="q-table__title">Datasets</div>
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
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
      </div>

      <div
        class="q-mt-sm"
        v-if="selected.length==0 && !selectedProduct.unsaved_row"
      >
        <div class="text-h6 q-ml-md text-center">Select an item for specifics</div>
      </div>
      <div
        class="q-pa-md"
        v-if="selected.length>0 || selectedProduct.unsaved_row"
      >
        <!--<q-markup-table class="q-gutter-y-md column">-->
        <q-form ref="myForm">
          <div class="text-h6 q-ml-md">Dataset Detail</div>
          <q-input
            class="q-ml-md"
            :value="selectedProduct.UUID"
            @input="value=>updateProduct('UUID',value)"
            label="UUID"
          >
            <template v-slot:append>
              <q-btn
                color="primary"
                label="New GUID"
                @click="createGUID"
              />
              <!--<q-icon name="fingerprint" />-->
            </template>
          </q-input>
          <q-input
            class="q-ml-md"
            :value="selectedProduct.gazeteerName"
            @input="value=>updateProduct('gazeteerName',value)"
            label="Gazeteer"
          />
          <q-input
            class="q-ml-md"
            :value="selectedProduct.year"
            @input="value=>updateProduct('year',value)"
            label="Year"
          />
          <q-input
            class="q-ml-md"
            :value="selectedProduct.resolution"
            @input="value=>updateProduct('resolution',value)"
            label="Resolution"
          />
          <q-input
            class="q-ml-md"
            :value="selectedProduct.srs"
            @input="value=>updateProduct('srs',value)"
            label="SRS"
          >
            <q-popup-edit
              buttons
              :value="selectedProduct.srs"
              @input="value=>updateProduct('srs',value)"
              @before-show="srsMakeSelection"
              @cancel="srsCancel"
            >
              <q-table
                style="height: 30rem"
                :data="srsOptions"
                :columns="srsColumns"
                row-key="Code"
                selection="single"
                :rows-per-page-options="[0]"
                @selection="filterBySelectionSrs"
                :selected.sync="selectedSrs"
                virtual-scroll
                :pagination.sync="pagination"
              >
                <template v-slot:top>
                  <div class="col">
                    <div class="q-table__title">Select SRS</div>
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
                    borderless
                    dense
                    debounce="300"
                    color="primary"
                    v-model="filterSRS"
                    @input="filterFn"
                  >
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </template>
              </q-table>
            </q-popup-edit>
          </q-input>
          <q-input
            class="q-ml-md"
            :value="selectedProduct.metadataPersistentId"
            @input="value=>updateProduct('metadataPersistentId',value)"
            label="Metadata Persistent Id"
          />
          <q-input
            class="q-ml-md"
            :value="selectedProduct.l3ProductTifLocation"
            @input="value=>updateProduct('l3ProductTifLocation',value)"
            label="L3 Product Tif Location"
          />
          <q-input
            class="q-ml-md"
            :value="selectedProduct.l0CoverageLocation"
            @input="value=>updateProduct('l0CoverageLocation',value)"
            label="L0 Coverage Location"
          />
          <q-input
            class="q-ml-md"
            :value="selectedProduct.l3CoverageLocation"
            @input="value=>updateProduct('l3CoverageLocation',value)"
            label="L3 Coverage Location"
          />
          <q-input
            class="q-ml-md"
            :value="selectedProduct.hillshadeLocation"
            @input="value=>updateProduct('hillshadeLocation',value)"
            label="L3 Hillshade Tif Location"
          />
          <q-btn
            class="q-ml-md"
            label="Submit"
            type="submit"
            color="primary"
            @click="_ => submitProduct(selectedProduct.id)"
          />
          <q-btn
            class="q-ml-md"
            label="Reset"
            type="reset"
            color="primary"
            @click="_ => resetProduct(selectedProduct.id)"
            flat
          />
        </q-form>
        <!--</q-markup-table>-->
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
<script>

import '../store/products'
import { mapActions, mapState } from 'vuex'

var rs = require('../statics/reference-system.json')

const srsSearchFilters = {
  geographic: (srsOptionList) => { return srsOptionList.filter(v => v.Type === "geographic 2D") },
  projected: (srsOptionList) => { return srsOptionList.filter(v => v.Type === "projected") },
  gda: (srsOptionList) => { return srsOptionList.filter(v => (v.Type === "geographic 2D") && v.Area === "Australia - GDA") },
  wgsutm: (srsOptionList) => { return srsOptionList.filter(v => v.Name.includes("WGS 84 / UTM")) },
  all: (srsOptionList) => { return srsOptionList }
}
const srsOptionsBasis = rs.Results

export default {
  methods: {
    ...mapActions('products', [
      'fetchData'
    ], 'product', ['fetchData', 'updateProduct', 'addEmptyRow']),
    filterBySelectionSrs: function (details) {
      if (details === undefined || details.rows.length == 0) {
        return
      }
      var code = 'EPSG:' + details.rows[0].Code
      this.updateProduct("srs", code)
    },
    filterBySelection: function (details) {
      if (details === undefined || details.rows.length == 0) {
        return
      }
      var recordId = details.rows[0].id
      this.$store.dispatch('product/fetchData', recordId)
    },
    srsMakeSelection () {
      this.filterSRS = ''
      this.filterFn(this.filterSRS)
      if (this.selectedProduct !== undefined) {
        if (this.selectedProduct.srs !== undefined || this.selectedProduct.srs !== '') {
          var matches = srsOptionsBasis.filter(v => 'EPSG:' + v.Code === this.selectedProduct.srs)
          if (matches.length > 0) {
            this.selectedSrs = [matches[0]]
            return
          }
        }
      }
      this.selectedSrs = []
    },
    addRow () {
      this.selected = []
      this.$store.dispatch('product/addEmptyRowAction')
    },
    removeRow () {
      if (this.selected === undefined || this.selected.length == 0) {
        return
      }
      if (this.selected[0].id === undefined) {
        return
      }
      this.$store.dispatch('product/removeProduct', this.selected[0].id)
      this.selected = []
    },
    updateProduct (element, value) {
      this.$store.commit('product/updateProduct', { 'element': element, 'value': value })
    },
    resetProduct (id) {
      if (this.selectedProduct.unsaved_row) {
        this.addRow()
      } else {
        this.$store.dispatch('product/fetchData', id)
      }
    },
    submitProduct (id) {
      this.$store.dispatch('product/saveData', this.selectedProduct)
    },
    filterFn (val) {
      const needle = val.toLowerCase()
      this.srsOptions = srsSearchFilters[this.srsSearchOption](srsOptionsBasis).filter(
        v => v.Name.toLowerCase().indexOf(needle) > -1 ||
          v.Code.toString().indexOf(needle) > -1
      )
    },
    srsCancel (value, initialValue) {
      console.log('cancel')
      this.srsMakeSelection()
      this.filterSRS = ''
    },
    createGUID () {
      const { v4: uuidv4 } = require('uuid')
      this.selectedProduct.UUID = uuidv4()
    }
  },
  computed:
    mapState({
      data: state => state.products.data,
      selectedProduct: state => state.product.selectedProduct,
      countAlias: ['data', 'selectedProduct']
    }),
  data () {
    return {
      srsOptions: srsOptionsBasis,
      srsSearchOption: 'all',
      loading: false,
      selected: [],
      selectedSrs: [],
      filter: '',
      filterSRS: '',
      pagination: {
        rowsPerPage: 100
      },
      srsColumns: [
        { name: 'Code', label: row => { return 'EPSG:' + row.Code }, field: row => { return 'EPSG:' + row.Code }, align: 'left', sortable: true },
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
          label: 'WGS 84 / UTM',
          value: 'wgsutm'
        },
        {
          label: 'All',
          value: 'all'
        }
      ],
      columns: [
        {
          name: 'UUID',
          required: true,
          label: 'UUID',
          align: 'left',
          field: row => row.UUID,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'gazeteerName', label: 'Gazeteer', field: 'gazeteerName', align: 'left', sortable: true },
        { name: 'year', label: 'Year', field: 'year', align: 'left', sortable: true },
        { name: 'resolution', label: 'Resolution', align: 'left', field: 'resolution', sortable: true },
        { name: 'srs', label: 'SRS', align: 'left', field: 'srs', sortable: true }
      ]
    }
  },
  created () {
    this.$store.dispatch('products/fetchData')
  }
}
</script>
