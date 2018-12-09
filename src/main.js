import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import 'buefy/dist/buefy.css';
import router from './router/router';
import store from './store/index';

Vue.use(Buefy);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
