<template>
  <div>
    <q-form
      ref="myForm"
      v-if='surveyL3Relation.surveyL3RelationSelected.productL3Src.uuid'
    >
      <div class="text-h6 q-ml-md">Survey -> L3 Product</div>
      <q-input
        class="q-ml-md"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.uuid"
        @input="value=>updateProduct('UUID',value)"
        label="UUID"
      >
        <template v-slot:append>
          <q-btn
            color="primary"
            label="New GUID"
            @click="createGuid"
          />
          <!--<q-icon name="fingerprint" />-->
        </template>
      </q-input>
      <q-input
        class="q-ml-md"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.name"
        @input="value=>updateProduct('gazeteerName',value)"
        label="Gazeteer"
      />
      <q-input
        class="q-ml-md"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.resolution"
        @input="value=>updateProduct('resolution',value)"
        label="Resolution"
      />
      <q-input
        class="q-ml-md"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.srs"
        @input="value=>updateProduct('srs',value)"
        label="SRS"
      />
      <q-input
        class="q-ml-md"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.metadataPersistentId"
        @input="value=>updateProduct('metadataPersistentId',value)"
        label="Metadata Persistent Id"
      />
      <q-input
        class="q-ml-md"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.productTifLocation"
        @input="value=>updateProduct('l3ProductTifLocation',value)"
        label="L3 Product Tif Location"
      />
      <q-btn
        class="q-ml-md"
        label="Submit"
        type="submit"
        color="primary"
        @click="_ => submitProduct(surveyL3Relation.id)"
      />
      <q-btn
        class="q-ml-md"
        label="Reset"
        type="reset"
        color="primary"
        @click="_ => resetProduct(surveyL3Relation.id)"
        flat
      />
    </q-form>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action, State, Mutation } from 'vuex-class'
import { SurveyL3RelationStateInterface } from '../store/survey-l3-relation/state'

const SurveyIdProps = Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    surveyId: {
      type: Number,
      required: true
    }
  }
})
const namespace = 'surveyl3relation'

@Component
export default class ProductEditor extends SurveyIdProps {
  @State('surveyl3relation') surveyL3Relation!: SurveyL3RelationStateInterface

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Action('fetchData', { namespace }) fetchData!: any

  @Mutation('createGuid', { namespace }) createGuidRef!: any

  updateProduct (element: string, value: string) {
    this.$store.commit('product/updateProduct', { element: element, value: value })
  }

  resetProduct (id: number) {
    this.$store.dispatch('product/fetchData', id)
  }

  submitProduct (id: number) {
    this.$store.dispatch('product/saveData', id)
  }

  createGuid () {
    this.createGuidRef()
  }

  mounted () {
    this.fetchData(this.surveyId)
  }
}
</script>
