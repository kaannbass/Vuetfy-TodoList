<template>
  <v-snackbar
      transition="slide-x-reverse-transition"
      v-model="$store.state.snackbar.show"
      color="primary"
      absolute
      top
      right
  >
    {{ $store.state.snackbar.text }}
    <v-icon>
      mdi-pencil
    </v-icon>
    <template v-slot:action="{ attrs }">
      <v-btn
          color="light"
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
  name: "EditSnackbar.vue",
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