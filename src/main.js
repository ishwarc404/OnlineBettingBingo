import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import VueRouter from "vue-router";

import store from "./store/index"


import definedRoutes from "./router/index";


Vue.use(VueRouter); //enabling routing
// Register it globally

const router = new VueRouter({
  routes: definedRoutes,
  mode: "history"
});

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
