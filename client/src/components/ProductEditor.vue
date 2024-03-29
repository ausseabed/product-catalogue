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
      <div
        class="text-h6 q-ml-md"
        style="text-align: center"
      >Edit level 3 product associated with '{{surveyL3Relation.surveyL3RelationSelected.survey.name}}'</div>
      <q-form ref="myForm">
        <div
          class="row q-ma-md items-center"
          id="infobox"
        >
          <div class="col col-md-auto">
            <div class="q-ma-md text-primary">
              <q-icon
                :name="matInfo"
                style="font-size: 2rem"
              />
            </div>
          </div>
          <div class="col col-md-auto">
            <div class="q-ma-md">
              <span style='font-weight: bold'>Product presentation string: </span><span style="user-select: all;">{{productPresentationString}}</span>
            </div>
            <div class="q-ma-md">
              <span style='font-weight: bold'>Collated presentation string: </span><span style="user-select: all;">{{surveyPresentationString}}</span>
            </div>
          </div>
        </div>
        <div class="row items-center justify-end">
          <div class="q-ml-md col col-md-auto">
            {{surveyL3Relation.surveyL3RelationSelected.productL3Src.uuid}}
            <q-tooltip> UUID </q-tooltip>
          </div>
          <div class="q-mx-md col col-md-auto">
            <q-btn
              color="primary"
              label="New UUID"
              @click="createGuid"
            />
          </div>
        </div>
        <datalist id="autosuggestGazetteer">
          <option
            v-for="gazeteername in Array.from(new Set(surveyL3Relation.suggestions.gazeteer))"
            :key="gazeteername"
          >{{gazeteername}}</option>
        </datalist>
        <q-input
          class="q-ma-md"
          :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.name"
          @input="value=>updateProduct( {element:'name',value: value})"
          list='autosuggestGazetteer'
          label="Gazetteer"
        />
        <datalist id="autosuggestResolution">
          <option
            v-for="resolution in Array.from(new Set(surveyL3Relation.suggestions.resolution))"
            :key="resolution"
          >{{resolution}}</option>
        </datalist>
        <q-input
          class="q-ma-md"
          :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.resolution"
          @input="value=>updateProduct( {element:'resolution',value: value})"
          list='autosuggestResolution'
          label="Resolution"
        />

        <spatial-reference-generic
          :srs='surveyL3Relation.surveyL3RelationSelected.productL3Src.srs'
          v-on:change='updateSrs'
        />
        <q-select
          class="q-ma-md"
          :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.verticalDatum"
          emit-value
          map-options
          :options="verticalDatumOptions"
          @input="value=>updateProduct( {element:'verticalDatum',value: value})"
          label="Vertical Datum"
        />
        <datalist id="autosuggestMetadataPersistentId">
          <option
            v-for="metadataPersistentId in Array.from(new Set(surveyL3Relation.suggestions.metadataPersistentId))"
            :key="metadataPersistentId"
          >{{metadataPersistentId}}</option>
        </datalist>
        <q-input
          type="url"
          hint="url"
          class="q-ma-md"
          :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.metadataPersistentId"
          @input="value=>updateProduct( {element:'metadataPersistentId',value: value})"
          list='autosuggestMetadataPersistentId'
          label="Metadata Persistent Id"
          :rules="[
          val => (val.length === 0 || isValidUrl(val)) || 'Must be a valid url.',
        ]"
          lazy-rules
        />
        <div class="row items-center">

          <q-input
            v-if="productTifLocationUrlType==='s3'"
            class="q-ma-md col col-grow"
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
            class="q-ma-md col col-grow"
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
            class="q-ma-md"
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

        <div class="row items-center">
          <q-input
            v-if="productTifLocationUrlType==='s3'"
            class="q-ma-md col col-grow"
            type="url"
            hint="s3 uri"
            :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.productBagLocation"
            @input="value=>updateProduct( {element:'productBagLocation',value: value})"
            label="L3 Product BAG Location"
            :rules="[ val => (val.length === 0 || isS3Url(val))]"
            lazy-rules
          />
          <q-input
            v-if="productTifLocationUrlType==='https'"
            class="q-ma-md col col-grow"
            type="url"
            hint="https url"
            :value="s3ToHttps(surveyL3Relation.surveyL3RelationSelected.productL3Src.productBagLocation)"
            @input="value=>updateProduct( {element:'productBagLocation',value: httpsToS3(value)})"
            label="L3 Product BAG Location"
            :rules="[ val => (val.length === 0 || isValidUrl(val)) || 'Must be a valid url.' ]"
            lazy-rules
          />
          <q-btn-toggle
            v-model="productTifLocationUrlType"
            class="q-ma-md"
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

        <div class="row">
          <div class="col">
            <q-select
              class="q-ma-md"
              :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.defaultStyle"
              :options="styles.styles"
              option-value="id"
              option-label="name"
              @input="value=>updateProduct( {element:'defaultStyle',value: value})"
              label="Default Style"
            />
          </div>
          <div class="col">
            <q-select
              class="q-ma-md"
              multiple
              :value="surveyL3Relation.surveyL3RelationSelected.productL3Src.availableStyles"
              :options="styles.styles"
              option-value="id"
              option-label="name"
              @input="value=>updateProduct( {element:'availableStyles',value: value})"
              label="Additional Styles"
            />
          </div>
        </div>

        <div class="col col-md-auto">
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

      <l3-product-dist-detail
        v-if='productL3dist'
        :productl3dist='productL3dist'
      />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action, State, Mutation, Getter } from 'vuex-class'
import { SurveyL3RelationStateInterface } from '../store/survey-l3-relation/state'
import SpatialReferenceGeneric from './SpatialReferenceGeneric.vue'
import L3ProductDistDetail from './L3ProductDistDetail.vue'
import { S3Util } from '../lib/s3-util'
import { matInfo } from '@quasar/extras/material-icons'
import { UpdateProductKnownTypes } from '../store/survey-l3-relation/mutations'

import { ProductL3DistStateInterface } from '../store/product-l3-dist/state'
import { StylesStateInterface } from 'src/store/styles/state'

const namespace = 'surveyl3relation'

@Component({
  components: { 'spatial-reference-generic': SpatialReferenceGeneric, 'l3-product-dist-detail': L3ProductDistDetail },
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
export default class ProductEditor extends Vue {
  // eslint-disable-next-line
  @State(state => state.productl3dist) productL3dist!: ProductL3DistStateInterface
  @Action('fetchData', { namespace: 'productl3dist' }) fetchDataL3Dist!: (payload: number) => Promise<void>
  @Mutation('clearL3Dist', { namespace: 'productl3dist' }) clearL3Dist!: () => void

  @State('surveyl3relation') surveyL3Relation!: SurveyL3RelationStateInterface

  @Action('saveData', { namespace }) saveData!: () => Promise<void>

  @Action('fetchData', { namespace }) fetchData!: (relationId: number) => Promise<void>

  @Mutation('createGuid', { namespace }) createGuidRef!: () => void

  @Mutation('updateProduct', { namespace }) updateProduct!: (elementValuePair: { element: UpdateProductKnownTypes; value: string }) => void

  @Mutation('clearErrorMessagesMutation', { namespace }) clearErrorMessages!: () => void

  @Getter('productPresentationString', { namespace }) productPresentationString!: string

  @Getter('surveyPresentationString', { namespace }) surveyPresentationString!: string

  @Action('fetchData', { namespace: 'styles' }) fetchStyleData!: () => Promise<void>

  @State('styles') styles!: StylesStateInterface

  updateSrs (code: string) {
    this.updateProduct({ element: 'srs', value: code })
  }

  async saveDataLocal (surveyId: number) {
    await this.saveData()
    this.$router.push(
      {
        name: 'surveys',
        query: {
          surveyId: String(surveyId)
        }
      }).catch((e) => { console.log(e) })
  }

  async cancel (surveyId: number) {
    if (surveyId) {
      await this.fetchData(this.$props.relationId)
      this.$router.push(
        {
          name: 'surveys',
          query: {
            surveyId: String(surveyId)
          }
        }).catch((e) => { console.log(e) })
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

  async mounted () {
    await Promise.all([
      this.fetchStyleData(),
      this.fetchData(this.$props.relationId)
    ])

    if (this.surveyL3Relation && this.surveyL3Relation.surveyL3RelationSelected &&
      this.surveyL3Relation.surveyL3RelationSelected.productL3Src) {
      await this.fetchDataL3Dist(this.surveyL3Relation.surveyL3RelationSelected.productL3Src.id)
    } else {
      this.clearL3Dist()
    }
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
        }).catch((e) => { console.log(e) })
    })
  }

  isValidUrl (urlToTest: string) {
    const elm = document.createElement('input')
    elm.setAttribute('type', 'url')
    elm.value = urlToTest
    return elm.validity.valid
  }

  data () {
    return {
      matInfo: matInfo,
      verticalDatumOptions: [
        {
          label: 'Australian Height Datum (AHD)',
          value: 'AHD',
          description: 'Australian Height Datum - Used by CSIRO historically'
        },
        {
          label: 'Ellipsoid (Best)',
          value: 'WGS84',
          description: 'WGS84 "Ellipsoid"'
        },
        {
          label: 'Lowest Astronomical Tide (LAT)',
          value: 'LAT',
          description: 'Lowest Astronomical Tide - Used by AHO for safety-at-sea reasons'
        },
        {
          label: 'Mean Sea Level (MSL)',
          value: 'LMSL',
          description: 'Local Mean Sea Level (or just Mean Sea Level)'
        },
        {
          label: 'Unknown',
          value: 'Unknown',
          description: 'Unknown'
        }
      ]
    }
  }
}
</script>
