<template>
  <div
    class="row q-ml-md"
    v-if="productl3dist"
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
    <div class="col q-ma-md">
      <div class="row">
        Processed Products:
      </div>
      <div class="row">
        Bathymetry: {{productl3dist.productL3Dist.bathymetryLocation}}
      </div>
      <div class="row">
        Hillshade: {{productl3dist.productL3Dist.hillshadeLocation}}
      </div>
      <div class="row">
        Polygon: {{productl3dist.productL3Dist.l3CoverageLocation}}
      </div>
      <div class="row">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#infobox {
  background-color: rgba(97, 175, 254, 0.1);
  border-color: #61affe;
  border: 1px solid #61affe;
  border-radius: 4px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.19);
  color: #3b4151;
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
