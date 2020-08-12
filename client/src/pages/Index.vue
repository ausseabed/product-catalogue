<template>
  <q-page>
    <div class="row items-center justify-evenly q-pa-md">
      <div class="column justify-center">
        <div class='col-auto q-px-lg'>
          <h5>Welcome</h5>

          <h5 v-if="$q.platform.is.edge || $q.platform.is.ie">
            Please use Google Chrome. Authentication with popups may not work on Internet Explorer or Edge (NGA-326).
          </h5>
          <div v-if="!($q.platform.is.edge || $q.platform.is.ie)">
            Please click on one of the links to the left to login
          </div>
        </div>
      </div>
      <div class='col' />
    </div>
  </q-page>
</template>
