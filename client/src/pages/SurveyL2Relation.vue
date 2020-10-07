<template>
  <q-page padding>
    <div class='col'>
      <product-l2-editor
        title='Describe Product'
        :relationId='parseInt($route.params.relationId)'
        active
      ></product-l2-editor>
      <!--  :surveys='surveys' -->
    </div>
  </q-page>
</template>

<script lang='ts'>
import Vue from 'vue'

import ProductL2Editor from 'components/ProductL2Editor.vue'
export default Vue.extend({
  name: 'SurveyEditorPage',
  components: { ProductL2Editor }

})
</script>
