<template>
  <q-page padding>
    <div class='col'>
      <product-editor
        title='Describe Product'
        :relationId='parseInt($route.params.relationId)'
        active
      ></product-editor>
      <!--  :surveys='surveys' -->
    </div>
  </q-page>
</template>

<script lang='ts'>
import Vue from 'vue'

import ProductEditor from 'components/ProductEditor.vue'
export default Vue.extend({
  name: 'SurveyEditorPage',
  components: { ProductEditor }

})
</script>
