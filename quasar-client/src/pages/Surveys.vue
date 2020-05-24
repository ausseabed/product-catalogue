<template>
  <q-page class='flex'>

    <div class='col'>
      <surveys-editor
        title='Example component'
        active
      ></surveys-editor>
      <!--  :surveys='surveys' -->
    </div>
  </q-page>
</template>

<script lang='ts'>
import Vue from 'vue'

import SurveysEditor from 'components/SurveysEditor.vue'
export default Vue.extend({
  name: 'SurveyEditorPage',
  components: { SurveysEditor }
})
</script>
