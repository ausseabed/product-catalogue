<template>
  <div
    class="row q-ml-md items-center"
    v-if="productl3dist && productl3dist.productL3Dist"
    id="infobox"
  >
    <div class="col col-md-auto">
      <div class="q-ma-md">
        <q-icon
          :name="matCog"
          style="font-size: 2rem;"
        />
      </div>
    </div>
    <q-markup-table
      class="col q-ma-md"
      separator='none'
      flat
      dense
      style='background-color: rgba(255, 255, 255, 0.0); color: #3b4151'
    >
      <thead>
        <tr>
          <th
            colspan="2"
            class="text-left"
            style="font-weight: bold"
          >Processed Products (id=<span style="user-select: all;">{{productl3dist.productL3Dist.id}}</span>):
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Bathymetry:</td>
          <td class="text-left">{{productl3dist.productL3Dist.bathymetryLocation}}</td>
        </tr>
        <tr>
          <td class="text-left">Hillshade:</td>
          <td class="text-left">{{productl3dist.productL3Dist.hillshadeLocation}}</td>
        </tr>
        <tr>
          <td class="text-left">Polygon:</td>
          <td class="text-left">{{productl3dist.productL3Dist.l3CoverageLocation}}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
<style lang="scss">
#infobox {
  background-color: rgba(97, 175, 254, 0.1);
  color: #3b4151;
  border-color: #61affe;
  border: 1px solid #61affe;
  border-radius: 4px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.19);
}
</style>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action, State } from 'vuex-class'
// import { SurveyL3RelationStateInterface } from '../store/survey-l3-relation/state'
import { matMiscellaneousServices } from '@quasar/extras/material-icons'
import { ProductL3DistStateInterface } from '../store/product-l3-dist/state'

const L3ProductDistDetailProps = Vue.extend({
  props: {
    l3ProductSrcId: {
      type: Number,
      required: true
    }
  }
})

const namespace = 'productl3dist'
@Component
export default class L3ProductDistDetail extends L3ProductDistDetailProps {
  @State('productl3dist') productl3dist!: ProductL3DistStateInterface

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Action('fetchData', { namespace }) fetchData!: any

  data () {
    return {
      matCog: matMiscellaneousServices
    }
  }

  mounted () {
    this.fetchData(this.l3ProductSrcId)
  }
}
</script>
