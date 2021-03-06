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

        <div>v{{ apcVersion }}</div>
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
          @click="getKey"
          v-if="userName !== ''"
        >
          <q-item-section avatar>
            <q-icon
              :name="matVpnKey"
              size='lg'
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>REST API</q-item-label>
            <q-item-label caption>Directly access the REST API to the Product Catalogue</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          exact
          @click="logoutfn"
          v-if="userName !== ''"
        >
          <q-item-section avatar>
            <q-icon
              :name="matPowerSettingsNew"
              size='lg'
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>Logout</q-item-label>
            <q-item-label caption>Logout of the system</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <div
        class="q-ma-lg"
        v-if="userName !== ''"
      >Quasar v{{ $q.version }}</div>
    </q-drawer>

    <q-page-container>
      <!-- the virtual-scroll position of the table does not appear to be saved as part of keep-alive -->
      <!--  <keep-alive include="SurveyEditorPage"> -->
      <router-view />
      <!--  </keep-alive> -->
    </q-page-container>
  </q-layout>
</template>

<script lang='ts'>
import EssentialLink from 'components/EssentialLink.vue'
import { matMenu, matSchool, matVpnKey, matHome, matDirectionsBoat, matImportExport, matTextSnippet, matPowerSettingsNew } from '@quasar/extras/material-icons'
import Vue from 'vue'
import Component from 'vue-class-component'
import { AuthStateInterface } from '../store/auth/state'

@Component({
  components: {
    EssentialLink
  }
})
export default class MainLayout extends Vue {
  async logoutfn () {
    await this.$store.dispatch('auth/logout')
    this.$router.push({ name: '/' }).catch((e) => { console.log(e) })
  }

  getKey () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const key: string = (this.$store.state.auth as AuthStateInterface).bearerToken as string
    navigator.clipboard.writeText(key).then(function () {
      console.log('Async: Copying to clipboard was successful!')
    }, function (err) {
      console.error('Async: Could not copy text: ', err)
    })
    sessionStorage.setItem('rest-session-key', key)
    const win = window.open(window.location.origin + '/rest/api/', '_blank')
    if (win) {
      win.focus()
    }
  }

  get userName (): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const account = (this.$store.state.auth as AuthStateInterface).account
    return account !== undefined
      ? account.username
      : ''
  }

  data () {
    return {
      apcVersion: process.env.APC_VERSION,
      matMenu: matMenu,
      matSchool: matSchool,
      matHome: matHome,
      matVpnKey: matVpnKey,
      matDirectionsBoat: matDirectionsBoat,
      matImportExport: matImportExport,
      matTextSnippet: matTextSnippet,
      matPowerSettingsNew: matPowerSettingsNew,

      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          caption: 'Welcome page',
          icon: matHome,
          link: '/'
        },
        {
          title: 'Survey Datasets',
          caption: 'Add or remove information about bathymetry products',
          icon: matDirectionsBoat,
          link: '/surveys'
        },
        {
          title: 'Reports',
          caption: 'Identify files that are missing',
          icon: matTextSnippet,
          link: '/reports'
        },
        {
          title: 'Export Datasets',
          caption: 'Export dataset information for use in the Marine Portal',
          icon: matImportExport,
          link: '/exports'
        }
      ]
    }
  }
}
</script>
