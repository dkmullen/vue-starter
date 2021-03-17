import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    // { path: '/', component: Stepper },
    // { path: '/error', component: ErrorPage },
  ]
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
