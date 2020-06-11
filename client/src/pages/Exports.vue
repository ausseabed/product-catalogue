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
          label="Geoserver Getcapabilities Url"
        />
        <q-input
          class="q-ml-md"
          style="width:100%"
          v-model="geoserverProduction"
          label="Display in production?"
        />
        <q-btn
          class="q-ma-md"
          label="Create CSV"
          type="submit"
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
      const eftfLayer = new EftfLayer(this.geoserverUrl, this.geoserverProduction)
      const blob = await eftfLayer.getLayerDefinitionsFile()
      const currentTime = new Date()
      saveAs(blob, `EFTF_Layer_${currentTime.toISOString().replace(':', '.')}.csv`)
      this.progress = false
    }
  },
  data () {
    return {
      progress: false,
      geoserverUrl: 'https://warehouse.ausseabed.gov.au/geoserver',
      geoserverProduction: 'NO'
    }
  }
})
</script>
