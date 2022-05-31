<template>
  <div class="todo pa-6">
    <FieldAddTask/>

    <ListTasks
        v-if="$store.state.tasks.length"
    />
    <NoTasks
        v-else
    />
    <ButtonDoneSorting
    v-if="$store.state.sorting"
    />

  </div>
</template>

<script>
import FieldAddTask from "../components/Todo/FieldAddTask";
import ListTasks from "../components/Todo/ListTasks";
import NoTasks from "../components/Todo/NoTasks";
import ButtonDoneSorting from "../components/Todo/ButtonDoneSorting";

export default {
  components: {
    FieldAddTask, ListTasks, NoTasks, ButtonDoneSorting
  },
}
</script>

<style lang="sass">

</style>