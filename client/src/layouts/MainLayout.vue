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
          @click="getKey"
          v-if="userName !== ''"
        >
          <q-item-section avatar>
            <q-icon :name="matVpnKey" />
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
            <q-icon :name="matSchool" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Logout</q-item-label>
            <q-item-label caption>Logout of the system</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
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
import { matMenu, matSchool, matVpnKey } from '@quasar/extras/material-icons'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
    EssentialLink
  }
})
export default class MainLayout extends Vue {
  async logoutfn () {
    await this.$store.dispatch('auth/logout')
    this.$router.push({ name: '/' })
  }

  getKey () {
    const key: string = this.$store.state.auth.bearerToken
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
    const account = this.$store.state.auth.account
    return account !== undefined
      ? account.userName
      : ''
  }

  data () {
    return {
      matMenu: matMenu,
      matSchool: matSchool,
      matVpnKey: matVpnKey,

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
          link: '/surveys'
        },
        {
          title: 'Export Datasets',
          caption: 'Export dataset information for use in the Marine Portal',
          icon: matSchool,
          link: '/exports'
        }
      ]
    }
  }
}
</script>
