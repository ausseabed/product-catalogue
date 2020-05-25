<template>
  <div>
    <q-form
      ref="myForm"
      v-if='surveyL3Relation.surveyL3RelationSelected.productL3Src && surveyL3Relation.surveyL3RelationSelected.productL3Src.uuid !== undefined'
    >
      <div class="text-h6 q-ml-md">Survey -> L3 Product</div>
      <q-input
        class="q-ml-md"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.uuid"
        @input="value=>updateProduct( {element:'uuid',value: value})"
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
        @input="value=>updateProduct( {element:'name',value: value})"
        label="Gazeteer"
      />
      <q-input
        class="q-ml-md"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.resolution"
        @input="value=>updateProduct( {element:'resolution',value: value})"
        label="Resolution"
      />
      <q-input
        class="q-ml-md"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.srs"
        @input="value=>updateProduct( {element:'srs',value: value})"
        label="SRS"
      />
      <q-input
        class="q-ml-md"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.metadataPersistentId"
        @input="value=>updateProduct( {element:'metadataPersistentId',value: value})"
        label="Metadata Persistent Id"
      />
      <q-input
        class="q-ml-md"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.productTifLocation"
        @input="value=>updateProduct( {element:'productTifLocation',value: value})"
        label="L3 Product Tif Location"
      />
      <q-btn
        class="q-ma-md"
        label="Submit"
        type="submit"
        color="primary"
        @click="_ => saveData()"
      />
      <q-btn
        class="q-ma-md"
        label="Reset"
        type="reset"
        color="primary"
        @click="_ => fetchData()"
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
    relationId: {
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
  @Action('saveData', { namespace }) saveData!: any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Action('fetchData', { namespace }) fetchData!: any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Mutation('createGuid', { namespace }) createGuidRef!: any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Mutation('updateProduct', { namespace }) updateProduct!: any

  resetProduct (id: number) {
    this.$store.dispatch('product/fetchData', id)
  }

  createGuid () {
    this.createGuidRef()
  }

  mounted () {
    this.fetchData(this.relationId)
  }
}
</script>
