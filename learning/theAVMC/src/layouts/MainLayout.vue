<template>
  <q-layout view="lHr lpR fFf">
    <title>{{ $route.name }} | AVMC</title>
    <q-header bordered class="bg-grey-3 text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon name="fas fa-kiwi-bird" size="sm" class="q-pa-md lt-md header-icon" />
          <q-btn class="float-right" dense flat round icon="search" @click="right = !right" />
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
      <q-item exact clickable v-ripple to="/learn">
        <q-item-section class="text-weight-medium">Development</q-item-section>
        <q-item-section avatar>
          <q-icon name="fas fa-question" size="21px" />
        </q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
    <q-input outlined rounded placeholder="Search AVMC" dense class="q-ma-md">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    <q-list
        separator
        padding
    >  
    <object id="ann">
      <q-item class="q-pa-md" v-for="ann in announcements" :key="ann.title" :id="ann.title">
        <q-item-section>
          <q-item-label overline>Announcement!</q-item-label>
          <q-item-label class="text-weight-bold" :id="ann.title + '-title'" :ref="ann.id">{{ ann.title }}</q-item-label>
          <q-item-label caption :id="ann.title + '-desc'" :ref="ann.id + '-desc'">{{ ann.description }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{ ann.date }}</q-item-label>
        </q-item-section>
      </q-item>
    </object>
    </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
import db from "src/boot/firebase";
export default {
  data () {
    return {
      left: false,
      right: false,
      announcements: []
    }
  },
  mounted () {
    db.collection("announcements").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            let data = change.doc.data();
            let id = change.doc.id;
            if (data.note == true) {
              
            }
            else {
            if (change.type === "added") {
                this.announcements.unshift(data);
            }
            if (change.type === "modified") {
                // Search for Element with ID to change props innit
                document.getElementById(data.title + "-title").innerText = data.title;
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
            }
        });
    });
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