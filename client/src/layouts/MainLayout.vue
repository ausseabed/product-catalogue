<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>Ausseabed Product Catalogue</q-toolbar-title>

        <div>{{userName}}</div>
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

export default {
  name: 'MainLayout',

  data () {
    return {
      leftDrawerOpen: false,
      userName: (this.$store.state !== undefined && this.$store.state.account !== undefined ? this.$store.state.account.userName : '')
    }
  }
}
</script>
