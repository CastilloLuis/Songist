<template>

    <div class="container is fluid">
        <div id="home-logo">
            <app-logo></app-logo>
        </div>

        <div id="home-find-btn" v-if="!isSearchActive">
            <app-find-button @dispatchFindClick="receiveDispatchFindClick($event)"></app-find-button>
        </div>

        <div id="home-search-input" v-if="isSearchActive">
            <app-search-input></app-search-input>
        </div>

    </div>


</template>

<script>
import Logo from '../components/home-view/logo/Logo'
import FindButton from '../components/home-view/buttons/find-button/Find-Button';
import SearchInput from '../components/home-view/inputs/search-input/Search-Input';

export default {
  name: 'home',
  data () {
    return {
        isSearchActive: false
    }
  },
  components: {
    'app-logo': Logo,
    'app-find-button': FindButton,
    'app-search-input': SearchInput
  },
  methods: {
      receiveDispatchFindClick () {
          this.isSearchActive = true;
      }
  }
}
</script>

<style>
    #home-logo {
        margin-top: 10%;
        margin-left: 30%
    }
    #home-find-btn {
        margin-top: 4%;
        margin-left: 45%
    }
    #home-search-input {
        margin-top: 5%;
        margin-left: 32%;
    }
</style>