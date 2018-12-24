import axios from 'axios';

const state = {
    topSongs: [],
    searchedSongData: [],
    topArtists: []
};

const mutations = {
    SET_TOPSONGS (state, songs) {
        state.topSongs = songs;
    },

    SET_SEARCHED_SONG (state, song) {
        state.searchedSongData = song;
    },

    SET_TOP_ARTISTS (state, artists) {
        state.topArtists = artists;
    }
};

const actions = {
    getTopSongs: async({commit}) => {
        try{
            const { data: { tracks, artists } } = await axios.get('https://cors-anywhere.herokuapp.com/http://api.deezer.com/chart');
            commit('SET_TOPSONGS', tracks);
            console.log(tracks)
            commit('SET_TOP_ARTISTS', artists); // not used, yet
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
    },

    getTopArtists(state) {
        return state.topArtists
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}