import axios from 'axios';

const state = {
    topSongs: [],
    searchedSongData: []
};

const mutations = {
    SET_TOPSONGS (state, songs) {
        state.topSongs = songs;
    },

    SET_SEARCHED_SONG (state, song) {
        state.searchedSongData = song;
    }
};

const actions = {
    getTopSongs: async({commit}) => {
        try{
            const { data: { tracks } } = await axios.get('https://cors-anywhere.herokuapp.com/http://api.deezer.com/chart');
            console.log(tracks);
            commit('SET_TOPSONGS', tracks);
        } catch (e) {
            console.log('Error -> ', tracks);
        }
    },
    
    getSongsByName: async({commit}, key) => {
        try {
            const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=track:"${key}"`);
            commit('SET_SEARCHED_SONG', data);
        } catch (e) {
            console.log('Error -> ', e);
        }
    }
};

const getters = {
    getTopSongs(state) {
        return state.topSongs
    },

    getSearchedSong(state) {
        return state.searchedSongData
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}