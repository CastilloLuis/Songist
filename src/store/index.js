import Vue from 'vue';
import Vuex from 'vuex';
import artists from './general/artists';
import songs from './general/songs';
import lyrics from './general/lyrics';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { artists, songs, lyrics }
})