<template>
  <div class="doc-note doc-note--tip row q-ml-md">
    <div class="col col-md-auto">
      <div class="q-my-md">
        <q-icon
          :name="matCog"
          style="font-size: 2rem;"
        />
      </div>
    </div>
    <div
      class="col"
      v-if="productl3dist"
    > {{productl3dist.bathymetryLocation}}
    </div>
  </div>
</template>

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
