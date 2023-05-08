import Vue from 'vue'
import Vuex from 'vuex';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import numeral from 'numeral';
import store from './store'; 

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(Buefy);
Vue.prototype.$numeral = numeral;


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')