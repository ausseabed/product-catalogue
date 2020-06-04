<template>
  <q-page class="row items-center justify-evenly">
    <div style="width: 95%">
      <q-form ref="myForm">
        <q-input
          class="q-ml-md"
          style="width:100%"
          v-model="geoserverUrl"
          label="Geoserver Getcapabilities Url"
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
      console.log('starting')
      const eftfLayer = new EftfLayer(this.geoserverUrl)
      console.log('created')
      const blob = await eftfLayer.getLayerDefinitionsFile()
      console.log('finished')
      saveAs(blob, 'EFTF_Layer_Insert.csv')
    }
  },
  data () {
    return {
      geoserverUrl: 'https://warehouse.dev.ausseabed.gov.au/geoserver'
    }
  }
})
</script>
