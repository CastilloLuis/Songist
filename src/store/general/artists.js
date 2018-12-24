import axios from 'axios';

const state = {
    artist: '',
    artistTopTracks: [],
};

const mutations = {
    SET_ARTIST (state, artist) {
        state.artist = artist;
    },
    SET_ARTIST_TOP_TRACKS (state, tracks) {
        state.artistTopTracks = tracks;
    },
};

const actions = {
    getArtistByName: async ({commit}, artistName) => {
        try {
            const { data: {data} } = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${artistName}"`);
            for (let element of data) {
                const { name, id } = element.artist;
                if(name.toLowerCase().includes(artistName.toLowerCase())) {
                    const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top?limit=50"`);
                    commit('SET_ARTIST', element.artist);
                    commit('SET_ARTIST_TOP_TRACKS', data);
                    break
                }
            }
        } catch (e) {
            console.warn(e);
        }
    }
};

const getters = {
    getArtist (state) {
        return state.artist
    },

    getArtistTopTracks (state) {
        return state.artistTopTracks
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}