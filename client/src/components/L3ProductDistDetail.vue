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
    <div class="col"> Data
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
// import { Mutation, State } from 'vuex-class'
// import { SurveyL3RelationStateInterface } from '../store/survey-l3-relation/state'
import { matMiscellaneousServices } from '@quasar/extras/material-icons'

const L3ProductDistDetailProps = Vue.extend({
  props: {
    l3ProductSrcId: {
      type: Number,
      required: true
    }
  }
})

@Component
export default class L3ProductDistDetail extends L3ProductDistDetailProps {
  data () {
    return {
      matCog: matMiscellaneousServices
    }
  }
}
</script>
