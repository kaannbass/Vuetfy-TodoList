<template>
  <v-snackbar
      transition="slide-x-reverse-transition"
      v-model="$store.state.snackbar.show"
      color="green lighten-2"
      absolute
      top
      right
  >
    {{ $store.state.snackbar.text }}
    <v-icon>
      mdi-checkbox-marked-circle-plus-outline
    </v-icon>
    <template v-slot:action="{ attrs }">
      <v-btn
          color="orange darken-4"
          text
          v-bind="attrs"
          @click="CloseSnack"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar.vue",
  data: () => ({

    text: `Task Added!`,
  }),
  methods:{
    CloseSnack(state) {
      this.$store.dispatch('CloseSnack')
    }
  }
}
</script>

<style scoped>


</style>