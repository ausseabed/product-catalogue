<template>
  <div>
    <q-form
      ref="myForm"
      v-if='surveyL3Relation.surveyL3RelationSelected.productL3Src && surveyL3Relation.surveyL3RelationSelected.productL3Src.uuid !== undefined'
    >
      <div class="text-h6 q-ml-md">Edit level 3 product associated with '{{surveyL3Relation.surveyL3RelationSelected.survey.name}}'</div>
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
      <spatial-reference :srs='surveyL3Relation.surveyL3RelationSelected.productL3Src.srs' />
      <q-input
        type="url"
        hint="url"
        class="q-ml-md"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.metadataPersistentId"
        @input="value=>updateProduct( {element:'metadataPersistentId',value: value})"
        label="Metadata Persistent Id"
        :rules="[
          val => (val.length === 0 || isValidUrl(val)) || 'Must be a valid url.',
        ]"
        lazy-rules
      />
      <q-input
        class="q-ml-md"
        type="url"
        hint="url"
        :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.productTifLocation"
        @input="value=>updateProduct( {element:'productTifLocation',value: value})"
        label="L3 Product Tif Location"
        :rules="[
          val => (val.length === 0 || isValidUrl(val)) || 'Must be a valid url.',
        ]"
        lazy-rules
      />
      <q-btn
        class="q-ma-md"
        label="Submit"
        type="submit"
        color="primary"
        @click="_ => saveData().then(this.$router.push( { name: 'surveys' } ) )"
      />
      <q-btn
        class="q-ma-md"
        label="Reset"
        type="reset"
        color="primary"
        @click="_ => fetchData(relationId)"
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
import SpatialReference from './SpatialReference.vue'

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

@Component({ components: { SpatialReference } })
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

  isValidUrl (urlToTest: string) {
    let throwaway: URL
    try {
      throwaway = new URL(urlToTest)
    } catch (_) {
      return false
    }

    return throwaway !== undefined
  }
}
</script>
