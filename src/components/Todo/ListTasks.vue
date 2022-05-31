<template>
  <v-list
      class="pt-0"
      flat
  >
    <draggable v-model="tasks" class="list-group" handle=".handle">
      <Task
          v-for="task in tasks"
          :key="task.id"
          :task="task"
      />
    </draggable>
  </v-list>
</template>

<script>
import Task from "./Task";
import draggable from "vuedraggable"

export default {
  name: "ListTasks",
  components: {Task, draggable},
  computed: {
    tasks: {
      get() {
        return this.$store.getters.taskFiltered
      },
      set(value) {
        this.$store.dispatch('setTask', value)
      }
    }
  }
}
</script>

<style scoped>

</style>