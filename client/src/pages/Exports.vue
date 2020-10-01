<template>
  <q-page class="row items-top justify-evenly">
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

        <div class="q-pa-md">
          <div class="row">
            <q-input
              class="q-mr-md col"
              filled
              v-model="snapshotPreviousDate"
              label="Snapshot Start Time"
            >
              <template v-slot:prepend>
                <q-icon
                  :name="matCal"
                  class="cursor-pointer"
                >
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="snapshotPreviousDate"
                      mask="YYYY-MM-DDTHH:mm:ss.SSSZ"
                    />
                  </q-popup-proxy>
                </q-icon>
              </template>

              <template v-slot:append>
                <q-icon
                  :name="matTime"
                  class="cursor-pointer"
                >
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time
                      v-model="snapshotPreviousDate"
                      mask="YYYY-MM-DDTHH:mm:ss.SSSZ"
                      format24h
                    />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input
              class="q-ml-md col"
              filled
              v-model="snapshotEndDate"
              label="Snapshot End Time"
            >
              <template v-slot:prepend>
                <q-icon
                  :name="matCal"
                  class="cursor-pointer"
                >
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="snapshotEndDate"
                      mask="YYYY-MM-DDTHH:mm:ss.SSSZ"
                    />
                  </q-popup-proxy>
                </q-icon>
              </template>

              <template v-slot:append>
                <q-icon
                  :name="matTime"
                  class="cursor-pointer"
                >
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time
                      v-model="snapshotEndDate"
                      mask="YYYY-MM-DDTHH:mm:ss.SSSZ"
                      format24h
                    />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
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
        <q-checkbox
          class="q-ml-md"
          style="width:100%"
          v-model="metadataChanges"
          label="Show metadata changes in ecat?"
        />
        <div class="row">
          <q-btn
            class="q-ma-md col"
            label="Create Portal CSV"
            color="primary"
            @click="buildOutputs"
          />
          <q-btn
            class="q-ma-md col"
            label="Create Ecat CSV"
            color="primary"
            @click="buildEcat"
          />
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<script lang='ts'>
import { saveAs } from 'file-saver'
import { matToday, matAccessTime } from '@quasar/extras/material-icons'

import { Configuration } from '@ausseabed/product-catalogue-rest-client/configuration'

import { EftfLayer } from '../lib/eftf-layer'
import { date } from 'quasar'
import Vue from 'vue'
export default Vue.extend({
  name: 'ExportsPage',
  methods: {
    buildOutputs: async function () {
      const colon = RegExp('[:.-]', 'g')
      await this.$store.dispatch('auth/getLoginToken', {}, { root: true })
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const configuration = this.$store.getters['auth/configuration'] as Configuration
      this.progress = true
      const production = (this.geoserverProduction ? 'YES' : 'NO')
      const eftfLayer = new EftfLayer(this.geoserverUrl, production, this.collapseGroups, this.snapshotEndDate, this.snapshotPreviousDate, configuration, this.metadataChanges)
      const blob = await eftfLayer.getLayerDefinitionsFile()
      const productionText = (this.geoserverProduction ? 'PROD' : 'NONPROD')
      const groupedText = (this.collapseGroups ? 'GROUPED' : 'UNGROUPED')
      saveAs(blob, `EFTF_Layer_${productionText}_${groupedText}_${this.snapshotEndDate.replace(colon, '')}.csv`)
      this.progress = false
    },
    buildEcat: async function () {
      const colon = RegExp('[:.-]', 'g')
      await this.$store.dispatch('auth/getLoginToken', {}, { root: true })
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const configuration = this.$store.getters['auth/configuration'] as Configuration
      this.progress = true
      const production = (this.geoserverProduction ? 'YES' : 'NO')
      const eftfLayer = new EftfLayer(this.geoserverUrl, production, this.collapseGroups, this.snapshotEndDate, this.snapshotPreviousDate, configuration, this.metadataChanges)
      const blob = await eftfLayer.getEcatFileDefinition()
      saveAs(blob, `ECAT_Layer_${this.snapshotEndDate.replace(colon, '')}.csv`)
      this.progress = false
    }
  },
  data () {
    return {
      matCal: matToday,
      matTime: matAccessTime,
      progress: false,
      geoserverUrl: 'https://warehouse.ausseabed.gov.au/geoserver',
      geoserverProduction: false,
      collapseGroups: true,
      metadataChanges: false,
      snapshotPreviousDate: date.formatDate(Date.parse('2020-01-01'), 'YYYY-MM-DDTHH:mm:ss.SSSZ'),
      snapshotEndDate: date.formatDate(Date.now(), 'YYYY-MM-DDTHH:mm:ss.SSSZ')
    }
  }
})
</script>
