<template>
  <v-dialog
      :value="dialog"
      persistent
      max-width="290"
  >
    <v-card>
      <v-card-title class="text-h5">
        Delete Task?
      </v-card-title>
      <v-card-text>Are you sure you wanna delete this task?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
        >
          No
        </v-btn>
        <v-btn
            color="green darken-1"
            text
            @click="dialog = $store.dispatch('deleteTask',task.id)"
        >
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogDelete",
  props:['task'],
  data(){
    return{
      dialog:true
    }
  }
}
</script>

<style scoped>

</style>