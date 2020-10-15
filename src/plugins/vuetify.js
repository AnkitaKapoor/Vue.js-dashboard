import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuetify, VueAxios, axios);


export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },

   
    
});

