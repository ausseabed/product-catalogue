<template>
  <q-page class="row items-center justify-evenly">
    <div style="width: 95%">
      <div class="q-pa-md flex flex-center">

        <q-linear-progress
          v-if="progress"
          indeterminate
          color="primary"
          class="q-ma-md"
        />
      </div>
      <q-form ref="myForm">
        <q-input
          class="q-ml-md"
          style="width:100%"
          v-model="geoserverUrl"
          label="Geoserver Root Url"
        />
        <q-checkbox
          class="q-ml-md"
          style="width:100%"
          v-model="geoserverProduction"
          label="Display in production?"
        />
        <q-checkbox
          class="q-ml-md"
          style="width:100%"
          v-model="collapseGroups"
          label="Collapse groups by survey?"
        />
        <q-btn
          class="q-ma-md"
          label="Create CSV"
          color="primary"
          @click="buildOutputs"
        />
      </q-form>

    </div>
  </q-page>
</template>

<script lang='ts'>
import { saveAs } from 'file-saver'

import { EftfLayer } from './eftf-layer'

import Vue from 'vue'
export default Vue.extend({
  name: 'ExportsPage',
  methods: {
    buildOutputs: async function () {
      this.progress = true
      const production = (this.geoserverProduction ? 'YES' : 'NO')
      const eftfLayer = new EftfLayer(this.geoserverUrl, production, this.collapseGroups)
      const blob = await eftfLayer.getLayerDefinitionsFile()
      const currentTime = new Date()
      const productionText = (this.geoserverProduction ? 'PROD' : 'NONPROD')
      const groupedText = (this.collapseGroups ? 'GROUPED' : 'UNGROUPED')
      saveAs(blob, `EFTF_Layer_${productionText}_${groupedText}_${currentTime.toISOString().replace(':', '.')}.csv`)
      this.progress = false
    }
  },
  data () {
    return {
      progress: false,
      geoserverUrl: 'https://warehouse.ausseabed.gov.au/geoserver',
      geoserverProduction: false,
      collapseGroups: true
    }
  }
})
</script>
