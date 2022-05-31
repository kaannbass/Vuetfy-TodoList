<template>
  <div class="">
    <v-menu
        bottom
        left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            icon
            v-bind="attrs"
            v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <DialogDelete
        v-if="dialogs.delete"
        :task="task"
    />
    <DialogEdit
        v-if="dialogs.edit"
        :task="task"
    />
    <DialogDate
        v-if="dialogs.dueDate"
        :task="task"
    />

  </div>
</template>

<script>
import DialogDelete from "./Dialogs/DialogDelete";
import DialogEdit from "./Dialogs/DialogEdit";
import DialogDate from "./Dialogs/DialogDate";

export default {
  name: "TaskMenu",
  components: {
    DialogDelete,
    DialogEdit,
    DialogDate},
  props:['task'],
  data: () => ({
    dialogs: {
      delete: false,
      edit:false,
      dueDate:false,
    },
    items: [
      {
        title: 'Edit',
        icon: 'mdi-account-edit',
        click() {
          this.dialogs.edit = true
        }
      },
      {
        title: 'Date',
        icon: 'mdi-calendar-range',
        click() {
          this.dialogs.dueDate = true
        }
      },
      {
        title: 'Delete',
        icon: 'mdi-delete',
        click() {
          this.dialogs.delete = true
        }
      },
      {
        title: 'Sort',
        icon: 'mdi-drag-horizontal-variant',
        click() {
          if(!this.$store.state.search){
            this.$store.commit('toggleSorting')
          }
          else{
            this.$store.commit('showSnackBar','Sorry, no replacement when searching')
          }
        }
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this)
    },
  }
}
</script>

<style scoped>

</style>