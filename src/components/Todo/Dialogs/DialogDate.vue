<template>
  <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="date"
      persistent
      width="290px"
  >
    <v-date-picker
        v-model="date"
        scrollable
    >
      <v-spacer></v-spacer>
      <v-btn
          text
          color="primary"
          @click="modal = false"
      >
        Cancel
      </v-btn>
      <v-btn
          @click="saveTask"
          text
          color="primary"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogDate",
  props:['task'],
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    modal: true,
  }),
  methods:{
    saveTask(){
      let payload= {
        id: this.task.id,
        dueDate : this.date
      }
      this.$store.dispatch('updateDueDate',payload),
      this.modal = false
    },
  },
  mounted() {
    if(this.task.dueDate){
      this.date = this.task.dueDate
    }
  },
}
</script>

<style scoped>

</style>