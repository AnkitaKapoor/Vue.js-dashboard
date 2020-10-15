<template>
  <v-app>
    <v-content class="mx-4 mb-4">
      <Navbar />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
    components: {
    Navbar
  },

};
</script>
