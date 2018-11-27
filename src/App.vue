<template>
  <div id="app">
    <app-navbar></app-navbar>

    <div class="container is fluid">
    </div>
    
    <app-footer></app-footer>
  </div>
</template>

<script>
import NavBar from './components/layouts/navbar/NavBar';
import Footer from './components/layouts/footer/Footer';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'app-navbar': NavBar,
    'app-footer': Footer
  }
}
</script>

<style>
</style>
