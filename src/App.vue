<template>
  <div id="app">
    <app-navbar></app-navbar>
  
        <router-link v-if="this.$route.path != '/'" to="/" class="button is-primary is-rounded" style="position: absolute; left: 2%; top: 10%; z-index: 100000">
          ⬅
        </router-link>

    <div class="container is fluid">
      <router-view></router-view>
    </div>
    
    <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from 'vue';
import NavBar from './components/layouts/navbar/NavBar';
import Footer from './components/layouts/footer/Footer';
import Home from './views/Home';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'app-navbar': NavBar,
    'app-footer': Footer,
    'app-home-view': Home,
  },
  created() {
    console.log(this.$route.path)
  }
}
</script>

<style>
#app {
background: #B2FEFA;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0ED2F7, #B2FEFA);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0ED2F7, #B2FEFA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 100vh;

}
</style>
