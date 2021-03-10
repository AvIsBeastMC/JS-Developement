<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
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
      <q-item class="qweet q-py-md" v-for="qweet in qweets" :key="qweet.id">
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
        <q-btn @click="toggleLiked(qweet)" flat size="sm" :icon="qweet.liked ? 'fas fa-heart' : 'far fa-heart'" round color="primary" />
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
import db from "src/boot/firebase"
import { formatDistance, subDays } from 'date-fns'
export default {
  name: 'PageHome',
  data() {
    return {
      newQweetInput: '',
      qweets: [
        //  {
        //    id: 'ID1',
        //    content: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
        //    date: 1615353294215,
        //    liked: false
        //  },
        //  {
        //    id: 'ID2',
        //    content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
        //    date: 1615353381558,
        //    liked: true
        //  },
      ]
    }
  },
  methods: {
    addNewQweet() {
      let newQweet = {
        content: this.newQweetInput,
        date: Date.now(),
        liked: false
      }
      // this.qweets.unshift(newQweet)
      // Add a new document with a generated id.
      db.collection("qweets").add(newQweet).then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      }).catch((error) => {
          console.error("Error adding document: ", error);
      });
            this.newQweetInput = ''
    },
    deleteQweet(qweet) {
      db.collection("qweets").doc(qweet.id).delete().then(() => {
      console.log("Document successfully deleted!");
      }).catch((error) => {
      console.error("Error removing document: ", error);
});
    },
    toggleLiked(qweet) {
      db.collection("qweets").doc(qweet.id).update({
          liked: !qweet.liked
      })
      .then(() => {
          console.log("Document successfully updated!");
      })
      .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    }
  },
  mounted() {
    db.collection("qweets").orderBy('date').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          let qweetChange = change.doc.data()
          qweetChange.id = change.doc.id
            if (change.type === "added") {
                console.log("New Qweet: ", qweetChange);
                this.qweets.unshift(qweetChange)
            }
            if (change.type === "modified") {
                console.log("Modified Qweet: ", qweetChange);
                let index = this.qweets.findIndex(qweet => qweet.id === qweetChange.id)
                Object.assign(this.qweets[index], qweetChange)
            }
            if (change.type === "removed") {
                console.log("Removed Qweet: ", qweetChange);
                let index = this.qweets.findIndex(qweet => qweet.id === qweetChange.id)
                this.qweets.splice(index, 1)
            }
        });
    });
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
