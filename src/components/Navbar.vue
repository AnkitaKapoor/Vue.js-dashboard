<template>
  <nav>
    <v-app-bar app color="black" dark>
      <v-toolbar-side-icon @click="drawer =!drawer">
        <v-icon color="blue">mdi-menu</v-icon>
      </v-toolbar-side-icon>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

 <!-- dropdown menu -->
      <v-menu offset-y >
    <template v-slot:activator="{ on }" >
        <v-btn  v-on="on" dark large color="blue" class="mr-3">
            <v-icon left>mdi-menu-down</v-icon>
            <span>Menu</span>
        </v-btn>
    </template>
    <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
    </v-list>
</v-menu>

      <v-btn dark large color="blue">
        <span>Sign Out</span>
        <v-icon right small>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="black white--text">
        <v-layout column align-center>
        <v-flex class="mt-5">
       
          <v-avatar size="150" >
            <img class="text-lg-center" src="/avatar-1.png" >
          </v-avatar>
        
          <p class="white--text subheading mt-1">The Net Ninja</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon color="blue" class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Index", route: "/" },
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "mdi-folder", text: "My projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
       { icon: "mdi-account", text: "Results", route: "/results" },
      ]
    };
  }
};
</script>