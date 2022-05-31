<template>
  <v-dialog
      :value="dialog"
      persistent
      max-width="290"
  >
    <v-card>
      <v-card-title class="text-h5">
        Edit Task?
      </v-card-title>
      <v-card-text>
        Are you sure you wanna edit this task?
        <v-text-field
            v-model="tastTitle"
            @keyup.enter="SaveTask"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
        >
          Cancel
        </v-btn>
        <v-btn
            color="green darken-1"
            text
            @click="SaveTask"
            :disabled="!tastTitle || tastTitle === task.title"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogEdit",
  props: ['task'],
  data() {
    return {
      dialog: true,
      tastTitle: null,
    }
  },
  computed: {
    tastTitleInvalid() {
      return !this.tastTitle || this.tastTitle === this.task.title
    },
  },
  methods: {
    SaveTask() {
      if (!this.tastTitleInvalid) {
        let payload = {
          id: this.task.id,
          title: this.tastTitle,
        };
        this.$store.dispatch('updateTaskTitle', payload)
        this.dialog = false
        this.$vuetify.goTo(0,{duration: 0})
      }
    }
  },
  mounted() {
    this.tastTitle = this.task.title
  }
}
</script>

<style scoped>

</style>