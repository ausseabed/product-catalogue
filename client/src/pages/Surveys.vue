<template>
  <q-page padding>
    <div class='col'>
      <surveys-editor
        title='Edit Surveys'
        active
      />
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
