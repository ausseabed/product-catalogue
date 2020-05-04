<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>Ausseabed Product Catalogue</q-toolbar-title>
        <q-btn-dropdown
          stretch
          flat
          label="Account Settings"
        >
          <q-list>
            <q-item>
              <div class="row no-wrap q-pa-md">
                <div class="column items-center">
                  <!--
                  <q-avatar size="72px">
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                  </q-avatar>
-->
                  <div class="text-subtitle1 q-mt-md q-mb-xs">{{userName}}</div>

                  <q-btn
                    @click="logoutfn"
                    color="primary"
                    label="Logout"
                    push
                    size="sm"
                    v-close-popup
                  />
                </div>
              </div>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <div class="q-pa-sm text-right">Quasar v{{ $q.version }}</div>
    </q-footer>
  </q-layout>
</template>

<script>
const msalInstance = require('../boot/azure-ad').msalInstance
export default {
  name: 'MainLayout',
  methods: {
    logoutfn: function () {
      msalInstance.logout()
    }
  },
  data () {
    return {
      leftDrawerOpen: false,
      userName: (this.$store.state !== undefined && this.$store.state.account !== undefined ? this.$store.state.account.userName : '')
    }
  }
}
</script>
