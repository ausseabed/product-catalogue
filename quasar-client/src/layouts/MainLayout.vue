<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="matMenu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Ausseabed Product Catalogue
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="300"
      :breakpoint="700"
      bordered
      content-class="bg-grey-3"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          {{userName}}
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-item
          clickable
          exact
          @click="logoutfn"
        >
          <q-item-section avatar>
            <q-icon :name="matSchool" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Logout</q-item-label>
            <q-item-label caption> Logout of the system </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import { matMenu, matSchool } from '@quasar/extras/material-icons'
const msalInstance = require('../boot/auth').msalInstance

export default {
  name: 'MainLayout',
  methods: {
    logoutfn: function () {
      msalInstance.logout()
    }
  },
  components: {
    EssentialLink
  },
  created () {
    this.matMenu = matMenu
    this.matSchool = matSchool
  },
  data () {
    return {
      userName: (this.$store.state !== undefined && this.$store.state.account !== undefined ? this.$store.state.account.userName : ''),
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          caption: 'Welcome page',
          icon: matSchool,
          link: '/'
        },
        {
          title: 'Survey Datasets',
          caption: 'Add or remove information about bathymetry products',
          icon: matSchool,
          link: 'surveys'
        },
        {
          title: 'Export Datasets',
          caption: 'Export dataset information for use in the Marine Portal',
          icon: matSchool,
          link: 'exports'
        }
      ]
    }
  }
}
</script>
