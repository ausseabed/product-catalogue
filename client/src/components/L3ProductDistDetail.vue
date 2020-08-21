<template>
  <div
    class="row q-ma-md items-center"
    v-if="productl3dist && productl3dist.productL3Dist"
    id="infobox"
  >
    <div class="col col-md-auto">
      <div class="q-ma-md text-primary">
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
          <td
            class="text-left"
            v-if="productTifLocationUrlType==='s3'"
            style="user-select: all;"
            @click="_ => copyToClipboard(productl3dist.productL3Dist.bathymetryLocation)"
          >{{productl3dist.productL3Dist.bathymetryLocation}}</td>
          <td
            class="text-left"
            v-if="productTifLocationUrlType==='https'"
          >
            <a :href="s3ToHttps(productl3dist.productL3Dist.bathymetryLocation)">
              {{s3ToHttps(productl3dist.productL3Dist.bathymetryLocation)}}</a></td>
        </tr>
        <tr>
          <td class="text-left">Hillshade:</td>
          <td
            class="text-left"
            v-if="productTifLocationUrlType==='s3'"
            style="user-select: all;"
            @click="_ => copyToClipboard(productl3dist.productL3Dist.hillshadeLocation)"
          >{{productl3dist.productL3Dist.hillshadeLocation}}</td>
          <td
            class="text-left"
            v-if="productTifLocationUrlType==='https'"
          >
            <a :href="s3ToHttps(productl3dist.productL3Dist.hillshadeLocation)">
              {{s3ToHttps(productl3dist.productL3Dist.hillshadeLocation)}}</a></td>
        </tr>
        <tr>
          <td class="text-left">Polygon:</td>
          <td>

            <div
              class="text-left"
              v-if="productTifLocationUrlType==='s3'"
              style="user-select: all;"
              @click="_ => copyToClipboard(productl3dist.productL3Dist.l3CoverageLocation)"
            >{{productl3dist.productL3Dist.l3CoverageLocation}}</div>
            <div
              class="text-left"
              v-if="productTifLocationUrlType==='https'"
            >
              <a :href="s3ToHttps(productl3dist.productL3Dist.l3CoverageLocation)">{{s3ToHttps(productl3dist.productL3Dist.l3CoverageLocation)}}</a>
            </div>
            <div
              class="text-left"
              v-if="productTifLocationUrlType==='s3'"
              style="user-select: all;"
              @click="_ => copyToClipboard(shpSideCar('.dbf',productl3dist.productL3Dist.l3CoverageLocation))"
            >{{shpSideCar('.dbf',productl3dist.productL3Dist.l3CoverageLocation)}}</div>
            <div
              class="text-left"
              v-if="productTifLocationUrlType==='https'"
            >
              <a :href="s3ToHttps(shpSideCar('.dbf',productl3dist.productL3Dist.l3CoverageLocation))">{{s3ToHttps(shpSideCar('.dbf',productl3dist.productL3Dist.l3CoverageLocation))}}</a>
            </div>
            <div
              class="text-left"
              v-if="productTifLocationUrlType==='s3'"
              style="user-select: all;"
              @click="_ => copyToClipboard(shpSideCar('.prj',productl3dist.productL3Dist.l3CoverageLocation))"
            >{{shpSideCar('.prj',productl3dist.productL3Dist.l3CoverageLocation)}}</div>
            <div
              class="text-left"
              v-if="productTifLocationUrlType==='https'"
            >
              <a :href="s3ToHttps(shpSideCar('.prj',productl3dist.productL3Dist.l3CoverageLocation))">
                {{s3ToHttps(shpSideCar('.prj',productl3dist.productL3Dist.l3CoverageLocation))}}</a>
            </div>
            <div
              class="text-left"
              v-if="productTifLocationUrlType==='s3'"
              style="user-select: all;"
              @click="_ => copyToClipboard(shpSideCar('.shx',productl3dist.productL3Dist.l3CoverageLocation))"
            >{{shpSideCar('.shx',productl3dist.productL3Dist.l3CoverageLocation)}}</div>
            <div
              class="text-left"
              v-if="productTifLocationUrlType==='https'"
            >
              <a :href="s3ToHttps(shpSideCar('.shx',productl3dist.productL3Dist.l3CoverageLocation))">
                {{s3ToHttps(shpSideCar('.shx',productl3dist.productL3Dist.l3CoverageLocation))}}</a>
            </div>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <div class="col col-md-auto">
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
import { copyToClipboard } from 'quasar'
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
import { S3Util } from '../lib/s3-util'

const namespace = 'productl3dist'
@Component
export default class L3ProductDistDetail extends L3ProductDistDetailProps {
  @State('productl3dist') productl3dist!: ProductL3DistStateInterface

  @Action('fetchData', { namespace }) fetchData!: (payload: number) => Promise<void>

  data () {
    return {
      matCog: matMiscellaneousServices
    }
  }

  copyToClipboard (x: string) {
    copyToClipboard(x)
      .then(() => {
        this.$q.notify({ message: 'Copied to clipboard', color: 'primary' })
      })
      .catch(() => {
        console.log('Could not copy to clipboard') // Silentish fail
      })
  }

  shpSideCar (desiredExtension: string, url: string) {
    const regex = RegExp('.shp$')
    return url.replace(regex, desiredExtension)
  }

  isValidUrl (urlToTest: string) {
    const elm = document.createElement('input')
    elm.setAttribute('type', 'url')
    elm.value = urlToTest
    return elm.validity.valid
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
  async mounted () {
    await this.fetchData(this.l3ProductSrcId)
  }
}
</script>
