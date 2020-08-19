<template>
  <q-page>
    <div class='col-auto q-px-lg'>
      <h5>Reports</h5>
    </div>
    <div class="q-pa-md">
      <q-markup-table separator='cell'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Metric</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Records</td>
            <td v-if='!reports.productL3Dists'>
              <q-spinner
                color="primary"
                size="3em"
              />
            </td>
            <td v-if='reports.productL3Dists'>Count = {{reports.productL3Dists.length}}</td>
            <td></td>
          </tr>
          <tr>
            <td>Files</td>
            <td v-if='!reports.fileExists'>
              <q-spinner
                color="primary"
                size="3em"
              />
            </td>
            <td v-if='reports.fileExists'>
              Bathymetry ({{reports.fileExists.bathymetryLocation.filter(entry=>{return entry.exists}).length}}/{{reports.fileExists.bathymetryLocation.length}});
              Hill Shades ({{reports.fileExists.hillshadeLocation.filter(entry=>{return entry.exists}).length}}/{{reports.fileExists.hillshadeLocation.length}});
              Polygon Boundaries ({{reports.fileExists.l3CoverageLocation.filter(entry=>{return entry.exists}).length}}/{{reports.fileExists.l3CoverageLocation.length}})
            </td>
            <td>
              <q-btn
                round
                color='primary'
                :icon="matSaveAlt"
                size='md'
                @click='saveReport'
              />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </q-page>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action, State } from 'vuex-class'
import { ReportsStateInterface } from '../store/reports/state'
import { matSaveAlt } from '@quasar/extras/material-icons'
import { saveAs } from 'file-saver'

const namespace = 'reports'

@Component
export default class ProductEditor extends Vue {
  matSaveAlt = matSaveAlt
  @State('reports') reports!: ReportsStateInterface

  @Action('fetchData', { namespace }) fetchData!: () => Promise<void>

  async mounted () {
    await this.fetchData()
  }

  saveReport () {
    if (!this.reports.fileExists) return
    const colon = RegExp('[:.-]', 'g')
    const bathy = this.reports.fileExists.bathymetryLocation.map((row) => { return `bathymetry,${row.product.bathymetryLocation},${row.exists ? 'true' : 'false'}` }).sort()
    const hill = this.reports.fileExists.hillshadeLocation.map((row) => { return `hillshade,${row.product.hillshadeLocation},${row.exists ? 'true' : 'false'}` }).sort()
    const poly = this.reports.fileExists.l3CoverageLocation.map((row) => { return `polygon,${row.product.l3CoverageLocation},${row.exists ? 'true' : 'false'}` }).sort()

    const csv = bathy.concat(hill).concat(poly).join('\r\n')
    const blob = new Blob([csv], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, `Files_${(new Date()).toISOString().replace(colon, '')}.csv`)
  }
}
</script>
