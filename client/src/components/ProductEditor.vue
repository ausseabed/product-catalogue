<template>
  <div class="column justify-center">
    <div
      class="col-auto q-md q-gutter-sm"
      v-if="surveyL3Relation.errorMessages.length>0"
    >
      <q-banner
        inline-actions
        class="text-white bg-red"
      >
        {{surveyL3Relation.errorMessages.slice(-1)[0]}}
        <template v-slot:action>
          <q-btn
            flat
            label="Dismiss"
            @click="clearErrorMessages"
          />
        </template>
      </q-banner>
    </div>

    <div
      class="col"
      v-if="surveyL3Relation.surveyL3RelationSelected && surveyL3Relation.surveyL3RelationSelected.productL3Src && surveyL3Relation.surveyL3RelationSelected.productL3Src.uuid !== undefined"
    >
      <q-form ref="myForm">
        <div class="text-h6 q-ml-md">Edit level 3 product associated with '{{surveyL3Relation.surveyL3RelationSelected.survey.name}}'</div>
        <div class="row items-center justify-end">
          <div class="q-ml-md col col-md-auto">
            {{surveyL3Relation.surveyL3RelationSelected.productL3Src.uuid}}
            <q-tooltip> UUID </q-tooltip>
          </div>
          <div class="q-ml-md col col-md-auto">
            <q-btn
              color="primary"
              label="New UUID"
              @click="createGuid"
            />
          </div>
        </div>
        <q-input
          class="q-ml-md"
          :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.name"
          @input="value=>updateProduct( {element:'name',value: value})"
          label="Gazetteer"
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
        <div class="row items-center">

          <q-input
            v-if="productTifLocationUrlType==='s3'"
            class="q-ml-md col col-grow"
            type="url"
            hint="s3 uri"
            :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.productTifLocation"
            @input="value=>updateProduct( {element:'productTifLocation',value: value})"
            label="L3 Product Tif Location"
            :rules="[isS3Url]"
            lazy-rules
          />
          <q-input
            v-if="productTifLocationUrlType==='https'"
            class="q-ml-md col col-grow"
            type="url"
            hint="https url"
            :value="s3ToHttps(surveyL3Relation.surveyL3RelationSelected.productL3Src.productTifLocation)"
            @input="value=>updateProduct( {element:'productTifLocation',value: httpsToS3(value)})"
            label="L3 Product Tif Location"
            :rules="[ val => (val.length === 0 || isValidUrl(val)) || 'Must be a valid url.' ]"
            lazy-rules
          />
          <q-btn-toggle
            v-model="productTifLocationUrlType"
            push
            no-caps
            rounded
            toggle-color="primary"
            :options="[
          {label: 's3', value: 's3'},
          {label: 'https', value: 'https'}
        ]"
          />
        </div>
        <div class="q-ma-lg col col-md-auto">
          <q-btn
            class="q-ma-md"
            label="Submit"
            color="primary"
            @click="_ => saveDataLocal(surveyL3Relation.surveyL3RelationSelected.survey.id)"
          />
          <q-btn
            class="q-ma-md"
            label="Cancel"
            color="primary"
            @click="_ => cancel(surveyL3Relation.surveyL3RelationSelected.survey.id)"
            flat
          />
        </div>
      </q-form>
      <l3-product-dist-detail :l3ProductSrcId='surveyL3Relation.surveyL3RelationSelected.productL3Src.id' />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action, State, Mutation } from 'vuex-class'
import { SurveyL3RelationStateInterface } from '../store/survey-l3-relation/state'
import SpatialReference from './SpatialReference.vue'
import L3ProductDistDetail from './L3ProductDistDetail.vue'
import { S3Util } from '../components/s3-util'

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

@Component({ components: { 'spatial-reference': SpatialReference, 'l3-product-dist-detail': L3ProductDistDetail } })
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Mutation('clearErrorMessagesMutation', { namespace }) clearErrorMessages!: any

  async saveDataLocal (surveyId: number) {
    await this.saveData()
    this.$router.push(
      {
        name: 'surveys',
        query: {
          surveyId: String(surveyId)
        }
      })
  }

  async cancel (surveyId: number) {
    if (surveyId) {
      await this.fetchData(this.relationId)
      this.$router.push(
        {
          name: 'surveys',
          query: {
            surveyId: String(surveyId)
          }
        })
    }
  }

  s3ToHttps (urlToTest: string) {
    if (!(this.isValidUrl(urlToTest))) {
      return urlToTest
    }
    try {
      const bucketkeypair = S3Util.getBucketFromS3Uri(urlToTest)
      if (bucketkeypair === undefined) {
        return urlToTest
      }
      return S3Util.getHttpsUrl(bucketkeypair)
    } catch (e) {
      console.log(e)
      return urlToTest
    }
  }

  httpsToS3 (urlToTest: string) {
    if (!(this.isValidUrl(urlToTest))) {
      return urlToTest
    }
    try {
      const bucketkeypair = S3Util.getBucketFromHttpsUrl(urlToTest)
      if (bucketkeypair === undefined) {
        return urlToTest
      }
      return S3Util.getS3Url(bucketkeypair)
    } catch (e) {
      console.log(e)
      return urlToTest
    }
  }

  productTifLocationUrlType = 's3'

  convertHttp () {
    // do nothing
  }

  createGuid () {
    this.createGuidRef()
  }

  mounted () {
    this.fetchData(this.relationId)
  }

  async isS3Url2 (urlToTest: string): Promise<boolean> {
    if (!(this.isValidUrl(urlToTest))) { return false }
    try {
      const bucketkeypair = S3Util.getBucketFromS3Uri(urlToTest)
      if (bucketkeypair === undefined) {
        return false
      }
      return S3Util.objectExists(bucketkeypair)
    } catch (e) {
      console.log(e)
      return false
    }
  }

  isS3Url (val: string) {
    return new Promise((resolve) => {
      this.isS3Url2(val).then(
        (val: boolean) => {
          if (val) { resolve(val) } else { resolve('* Did not resolve') }
        })
    })
  }

  isValidUrl (urlToTest: string) {
    const elm = document.createElement('input')
    elm.setAttribute('type', 'url')
    elm.value = urlToTest
    return elm.validity.valid
  }
}
</script>
