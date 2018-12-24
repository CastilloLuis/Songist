import Vue from 'vue';
import Vuex from 'vuex';
import artists from './general/artists';
import songs from './general/songs';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { artists, songs }
})