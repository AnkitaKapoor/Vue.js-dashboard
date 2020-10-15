<template>
  <div class="projects">
    <h1 class="mx-10 my-10">Project Examples</h1>
    <v-container class="my-10">
      <p class="blue white--text">P tags examples</p>
      <p class="pink yellow--text">P tags examples</p>
      <p class="pink lighten-3 black--text">P tags examples</p>
      <h1 class="display-4">Vuetify Project</h1>

      <v-btn dark>Click me</v-btn>
      <v-btn class="pink black--text">Click me</v-btn>
      <v-btn dark color="pink">Click me</v-btn>
      <h2 class="display-1">icon example</h2>

      <v-btn text dark color="pink">
        <v-icon>mdi-email</v-icon>
      </v-btn>

      <v-btn dark color="red">
        <v-icon left>mdi-update</v-icon>
        <span>See you later</span>
      </v-btn>

      <v-btn dark small color="red">
        <v-icon left small>mdi-update</v-icon>
        <span>See you later</span>
      </v-btn>

      <v-btn dark large color="red">
        <span>See you now</span>
        <v-icon right large>mdi-update</v-icon>
      </v-btn>

      <v-btn fab dark small color="purple">
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>

      <h2 class="display-1">breakpoint and visibilty example</h2>

      <v-btn class="hidden-md-and-down">Click Down</v-btn>

      <v-btn class="hidden-md-and-up">Click Up</v-btn>

      <v-btn class="hidden-sm-only">Click only</v-btn>

      <v-divider></v-divider>
      <h2>Grid example</h2>
      <v-layout row wrap class="ma-2">
        <v-flex xs12 md6>
          <v-btn block class="primary">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn block class="primary">3</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn block class="primary">4</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-space-between class="ma-2">
        <v-flex xs4 md2>
          <v-btn block class="error">5</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn block class="warning">6</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn block class="success">7</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>