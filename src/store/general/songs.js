import axios from 'axios';

const state = {
    topSongs: []
};

const mutations = {
    SET_TOPSONGS (state, songs) {
        state.topSongs = songs;
    }
};

const actions = {
    getTopSongs: async({commit}) => {
        try{
            const {data: {tracks}} = await axios.get('https://cors-anywhere.herokuapp.com/http://api.deezer.com/chart');
            console.log(tracks);
            commit('SET_TOPSONGS', tracks);
        } catch (e) {
            console.log('Error -> ', tracks);
        }
    }
};

const getters = {
    getTopSongs(state) {
        return state.topSongs
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}