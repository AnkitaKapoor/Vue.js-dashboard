<template>
<v-app>
    <v-content class="mx-4 mb-4">
  <div id="app" >
    <header>
      <span>Handling Ajax Request with Axios in Vue</span>
    </header>
    {{ message }}
     <button id="btn" class="" v-on:click="getJokes">Get Jokes</button>
 
       
          <div v-for="joke in jokes" :key="joke.id">
          <div class="row">
             
            <div>
              <h3>{{ joke.id }}</h3>
              <p>{{ joke.name }}</p>
              <p>{{ joke.email }}</p>
           <p>{{ joke.phone }}</p>
          </div>
          <br>
        </div>
        </div>
      

    </div>
    </v-content></v-app>
</template>

<script>
  import axios from 'axios';
  
export default {
  name: 'app',
  data () {
    return {
      jokes: [],
      message: "hello I am here"
    }
  }, 
  methods: {
    getJokes: function () {
      this.loading = true;
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response)  =>  {
               this.jokes = response.data;
      })
    }
  },
}
</script>


