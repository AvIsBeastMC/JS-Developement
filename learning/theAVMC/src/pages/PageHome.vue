<template>
  <q-page class="q-pa-lg">
      <q-input bottom-slots v-model="newQweetInput" label="What's poppin'?" counter maxlength="280" :dense="dense">
        <template v-slot:before>
          <q-avatar>
            <img src="https://avmcgames.ml/servermc.png">
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-icon name="schedule" />
        </template>

        <template v-slot:hint>
          Post | theAVMC
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      newQweetInput: ''
    }
  }
}
</script>
