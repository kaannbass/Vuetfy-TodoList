<template>
  <div class="">
    <v-text-field
        v-model="newTaskTitle"
        @keyup.enter="addTask"
        hide-details
        class="pa-3"
        outlined
        clearable
        label="Add Task"
    >
      <template v-slot:append>
        <v-icon
            color="primary"
            @click="addTask"
            :disabled="!newTaskTitle"
        >
          mdi-plus
        </v-icon>
      </template>
    </v-text-field>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTaskTitle: '',
    }
  },
  computed: {
    newTaskInvalid() {
      return !this.newTaskTitle
    }
  },
  methods: {
    addTask(state, newTaskTitle) {
      if (!this.newTaskInvalid) {
        this.$store.dispatch('addTask', this.newTaskTitle)
        this.newTaskTitle = ''
      }
    },
  },
}
</script>

<style>

</style>