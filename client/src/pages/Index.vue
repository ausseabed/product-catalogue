<template>
  <q-page class="row items-center justify-evenly q-pa-md">
    <div class="column justify-center">
      <div class='col-auto'>Welcome</div>
      <div
        class='col-auto'
        v-if="$q.platform.is.edge || $q.platform.is.ie"
      >Please use Google Chrome. Authentication with popups does not work on Internet Explorer or Edge.</div>
    </div>
  </q-page>
</template>
