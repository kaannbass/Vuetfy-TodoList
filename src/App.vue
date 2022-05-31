<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        :mobile-breakpoint="768"
        app
    >

      <v-img
          class="pa-4 pt-5"
          src="https://picsum.photos/1920/1080?random"
          height="170"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
        <v-avatar size="80" class="mb-2">
          <img
              src="./assets/kk.jpg"
              alt="Kaan-bas"
          >
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">Kaan Baş</div>
        <div class="white--text text-subtitle-2">Title</div>
      </v-img>

      <!--- SideBar --->
      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--    navBar-->
    <v-app-bar
        app
        color="primary"
        dark
        prominent
        src="https://picsum.photos/1920/1080?random"
        height="170"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <Search/>
        </v-row>
        <v-row>
          <v-toolbar-title class="text-h4 ml-4">My Works</v-toolbar-title>
        </v-row>
        <v-row>
          <LiveDateTime/>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <Snackbar/>
<!--      <DeleteSnackbar/>
      <EditSnackbar/>-->
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "./components/Shared/Snackbar";
import DeleteSnackbar from "./components/Shared/DeleteSnackbar";
import EditSnackbar from "./components/Shared/EditSnackbar";
import Search from "./components/Tools/Search";
import LiveDateTime from "./components/Tools/LiveDateTime";

export default {
  data: () => ({
    drawer: null,
    items: [
      {title: 'Home', icon: 'mdi-home', to: '/'},
      {title: 'Todo', icon: 'mdi-format-list-checks', to: 'todo'},
      {title: 'About', icon: 'mdi-help-box', to: 'about'},
    ],
    right: null,
  }),
  components: {Snackbar, Search, LiveDateTime,DeleteSnackbar,EditSnackbar},
  mounted() {
    this.$store.dispatch('getTasks')
  }
}
</script>

<style lang="sass">
.header-container
  max-width: none !important
</style>