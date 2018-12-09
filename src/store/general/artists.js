import axios from 'axios';

const state = {
    artist: ''
};

const mutations = {
    SET_ARTIST (state, artist) {
        console.warn(artist);
        state.artist = artist;
    }
};

const actions = {
    getArtistByName ({commit}) {
        console.log('getting artist by name :)');
        commit('SET_ARTIST', 'LUIS EDUARDO CASTILLO GARCIA');
    }
};

const getters = {
    getArtist () {
        return state.artist
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}