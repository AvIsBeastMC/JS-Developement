<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
    <div class="q-pa-lg row items-end q-col-gutter-md">
      <div class="col">
        <q-input bottom-slots v-model="newQweetInput" autogrow class="new-post" label="What's poppin'?" counter maxlength="280" :dense="dense">
        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://avmcgames.ml/servermc.png">
          </q-avatar>
        </template>
        <template v-slot:hint>
          Post | theAVMC
        </template>
      </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn @click="addNewQweet" :disable="!newQweetInput" class="q-mb-lg" push color="primary" rounded label="post" />
      </div>
    </div>
    <q-separator class="divider" size="9px" color="grey-3" />
    <q-list separator>
    <transition-group appear enter-active-class="animated fadeIn slow" leave-active-class="animated fadeOut slow">
      <q-item class="qweet q-py-md" v-for="qweet in qweets" :key="qweet.date">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://avmcgames.ml/servermc.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
          <strong>AvIsBeastMC | AVMC Network</strong>
          <span class="text-grey-7"> @arunnyavarma <br class="lt-md"> &bull; {{ qweet.date | relativeDate }} </span>
          </q-item-label>
          <q-item-label class="theAVMC-content text-body1"> {{ qweet.content }} </q-item-label>
        <div class="row justify-between q-mt-sm qweet-icons">
        <q-btn flat size="sm" round color="primary" icon="far fa-comment" />
        <q-btn flat size="sm" round color="primary" icon="fas fa-retweet" />
        <q-btn flat size="sm" round color="primary" icon="far fa-heart" />
        <q-btn @click="deleteQweet(qweet)" flat size="sm" round color="primary" icon="fas fa-trash" />
        </div>
        </q-item-section>
      </q-item>
    </transition-group>  
    </q-list>
    </q-scroll-area>  
  </q-page>
</template>

<script>
import { formatDistance, subDays } from 'date-fns'
export default {
  name: 'PageHome',
  data() {
    return {
      newQweetInput: '',
      qweets: [
        {
          content: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
          date: 1615353294215
        },
        {
          content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
          date: 1615353381558
        }
      ]
    }
  },
  methods: {
    addNewQweet() {
      let newQweet = {
        content: this.newQweetInput,
        date: Date.now()
      }
      this.qweets.unshift(newQweet)
      this.newQweetInput = ''
    },
    deleteQweet(qweet) {
      console.log('Delete theAVMC Post: ', qweet)
      let dateToDelete = qweet.date
      let index = this.qweets.findIndex(qweet => qweet.date === dateToDelete)
      console.log('Index: ', index)
      this.qweets.splice(index, 1)
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    }
  }
}
</script>
<style lang="sass">
.new-post
  textarea
    font-size: 17px
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.qweet:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
.theAVMC-content
  white-space: pre-line
.qweet-icons
  margin-left: -5px     
</style>
