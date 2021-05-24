import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import './layout/styles/styles.scss';
import 'lodash'


import Vue from 'vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


import app from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
