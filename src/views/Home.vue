<template>

    <div class="container is fluid home">
                
        <div id="home-logo" style="display: block; margin: auto;">
            <app-logo></app-logo>
        </div>

        <div id="home-find-btn" v-if="!isSearchActive" style="display: block; margin: auto; padding: 25px">
            <app-find-button @dispatchGetStartedClick="receiveDispatchGetStartedClick($event)"></app-find-button>
        </div>

        <div id="home-search-input" v-if="isSearchActive">
            <app-search-input @status="handleSearch($event)"></app-search-input>
        </div>

        <div v-if="!isSearchActive">
            <router-link to="/principal"><a class="button is-primary" style="border: none;display: block; margin: auto; background: transparent; font-weight: 500; letter-spacing: -0.5px">Just, recommend me songs</a></router-link>
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
        isSearchActive: false,
        artist:  ''
    }
  },

  components: {
    'app-logo': Logo,
    'app-find-button': FindButton,
    'app-search-input': SearchInput
  },

  methods: {

    receiveDispatchGetStartedClick () {
        this.isSearchActive = true;
    },

    handleSearch ({status, type}) {
        console.log(status)
        console.log(type)
        if ( status === 200 ) {
            this.$router.push(this.handleRoutes(type));
        } else {
            console.log('STATUS', status);
        }
    },

    handleRoutes (type) {
        switch (type) {
            case 'artist':
                return '/artist'
            case 'song':
                return '/song'
        }
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

    @media screen and (max-width: 800px) {
        .home {
            margin-top: 25%
        }
    }
</style>