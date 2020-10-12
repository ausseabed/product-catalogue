<template>
  <div class="column justify-center">
    <div
      class="col-auto q-md q-gutter-sm"
      v-if="surveyL2Relation.errorMessages.length>0"
    >
      <q-banner
        inline-actions
        class="text-white bg-red"
      >
        {{surveyL2Relation.errorMessages.slice(-1)[0]}}
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
      v-if="surveyL2Relation.surveyL2RelationSelected && surveyL2Relation.surveyL2RelationSelected.productL2Src && surveyL2Relation.surveyL2RelationSelected.productL2Src.uuid !== undefined"
    >
      <div
        class="text-h6 q-ml-md"
        style="text-align: center"
      >Edit level 2 product associated with '{{surveyL2Relation.surveyL2RelationSelected.survey.name}}'</div>
      <q-form ref="myForm">
        <div class="row items-center justify-end">
          <div class="q-ml-md col col-md-auto">
            {{surveyL2Relation.surveyL2RelationSelected.productL2Src.uuid}}
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
            v-for="gazeteername in Array.from(new Set(surveyL2Relation.suggestions.gazeteer))"
            :key="gazeteername"
          >{{gazeteername}}</option>
        </datalist>
        <q-input
          class="q-ma-md"
          :value="surveyL2Relation.surveyL2RelationSelected.productL2Src.name"
          @input="value=>updateProduct( {element:'name',value: value})"
          list='autosuggestGazetteer'
          label="Gazetteer"
        />
        <spatial-reference-generic
          :srs='surveyL2Relation.surveyL2RelationSelected.productL2Src.srs'
          v-on:change='updateSrs'
        />
        <q-select
          class="q-ma-md"
          :value="surveyL2Relation.surveyL2RelationSelected.productL2Src.verticalDatum"
          emit-value
          map-options
          :options="verticalDatumOptions"
          @input="value=>updateProduct( {element:'verticalDatum',value: value})"
          label="Vertical Datum"
        />
        <datalist id="autosuggestMetadataPersistentId">
          <option
            v-for="metadataPersistentId in Array.from(new Set(surveyL2Relation.suggestions.metadataPersistentId))"
            :key="metadataPersistentId"
          >{{metadataPersistentId}}</option>
        </datalist>
        <q-input
          type="url"
          hint="url"
          class="q-ma-md"
          :value="surveyL2Relation.surveyL2RelationSelected.productL2Src.metadataPersistentId"
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
            v-if="productGsfLocationUrlType==='s3'"
            class="q-ma-md col col-grow"
            type="url"
            hint="s3 uri"
            :value="surveyL2Relation.surveyL2RelationSelected.productL2Src.productGsfLocation"
            @input="value=>updateProduct( {element:'productGsfLocation',value: value})"
            label="L2 Product GSF Location"
            :rules="[isS3Url]"
            lazy-rules
          />
          <q-input
            v-if="productGsfLocationUrlType==='https'"
            class="q-ma-md col col-grow"
            type="url"
            hint="https url"
            :value="s3ToHttps(surveyL2Relation.surveyL2RelationSelected.productL2Src.productGsfLocation)"
            @input="value=>updateProduct( {element:'productGsfLocation',value: httpsToS3(value)})"
            label="L2 Product GSF Location"
            :rules="[ val => (val.length === 0 || isValidUrl(val)) || 'Must be a valid url.' ]"
            lazy-rules
          />
          <q-btn-toggle
            v-model="productGsfLocationUrlType"
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
            v-if="productGsfLocationUrlType==='s3'"
            class="q-ma-md col col-grow"
            type="url"
            hint="s3 uri"
            :value="surveyL2Relation.surveyL2RelationSelected.productL2Src.productPosmvLocation"
            @input="value=>updateProduct( {element:'productPosmvLocation',value: value})"
            label="Folder location for POSMV 000 inputs"
          />
          <q-input
            v-if="productGsfLocationUrlType==='https'"
            class="q-ma-md col col-grow"
            type="url"
            hint="https url"
            :value="s3ToHttps(surveyL2Relation.surveyL2RelationSelected.productL2Src.productPosmvLocation)"
            @input="value=>updateProduct( {element:'productPosmvLocation',value: httpsToS3(value)})"
            label="Folder location for POSMV 000 inputs"
          />
          <q-btn-toggle
            v-model="productGsfLocationUrlType"
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
        <div class="col col-md-auto">
          <q-btn
            class="q-ma-md"
            label="Submit"
            color="primary"
            @click="_ => saveDataLocal(surveyL2Relation.surveyL2RelationSelected.survey.id)"
          />
          <q-btn
            class="q-ma-md"
            label="Cancel"
            color="primary"
            @click="_ => cancel(surveyL2Relation.surveyL2RelationSelected.survey.id)"
            flat
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action, State, Mutation, Getter } from 'vuex-class'
import { SurveyL2RelationStateInterface } from '../store/survey-l2-relation/state'
import SpatialReferenceGeneric from './SpatialReferenceGeneric.vue'
import { S3Util } from '../lib/s3-util'
import { matInfo } from '@quasar/extras/material-icons'
import { UpdateProductKnownTypes } from '../store/survey-l2-relation/mutations'

const namespace = 'surveyl2relation'

@Component({
  components: { 'spatial-reference-generic': SpatialReferenceGeneric },
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
export default class ProductEditorL2 extends Vue {
  // eslint-disable-next-line

  @State('surveyl2relation') surveyL2Relation!: SurveyL2RelationStateInterface

  @Action('saveData', { namespace }) saveData!: () => Promise<void>

  @Action('fetchData', { namespace }) fetchData!: (relationId: number) => Promise<void>

  @Mutation('createGuid', { namespace }) createGuidRef!: () => void

  @Mutation('updateProduct', { namespace }) updateProduct!: (elementValuePair: { element: UpdateProductKnownTypes; value: string }) => void

  @Mutation('clearErrorMessagesMutation', { namespace }) clearErrorMessages!: () => void

  @Getter('productPresentationString', { namespace }) productPresentationString!: string

  @Getter('surveyPresentationString', { namespace }) surveyPresentationString!: string

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

  productGsfLocationUrlType = 's3'

  convertHttp () {
    // do nothing
  }

  createGuid () {
    this.createGuidRef()
  }

  async mounted () {
    await this.fetchData(this.$props.relationId)
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
