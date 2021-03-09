<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-grey-3 text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon name="fas fa-kiwi-bird" size="sm" class="q-pa-md lt-md header-icon" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered :width="283">
      <q-icon name="fas fa-kiwi-bird" size="lg" class="q-pa-md" />
      <q-list>
      <q-item exact clickable v-ripple to="/">
        <q-item-section class="text-weight-medium">Home</q-item-section>
        <q-item-section avatar>
          <q-icon name="home" size="22px" />
        </q-item-section>
      </q-item>
      <q-item exact clickable v-ripple to="/about">
        <q-item-section class="text-weight-medium">About</q-item-section>
        <q-item-section avatar>
          <q-icon name="info" size="22px" />
        </q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
    <q-input outlined rounded placeholder="Search theAVMC" dense class="q-ma-md">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    <q-list
        separator
        padding
    >  
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline>Announcement!</q-item-label>
          <q-item-label class="text-weight-bold">AVMC Shutdown Notice</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
    <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline>Announcement!</q-item-label>
          <q-item-label class="text-weight-bold">AVMC Shutdown Notice</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
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
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>
<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>