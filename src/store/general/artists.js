import axios from 'axios';

const state = {
    artist: ''
};

const mutations = {
    SET_ARTIST (state, artist) {
        state.artist = artist;
    }
};

const actions = {
    getArtistByName: async ({commit}, name) => {
        try {
            const { status, data } = await axios.get(`https://musicdemons.com/api/v1/artist/organic-search/${name}`);
            const { id } = data[0];
            if (status === 200) {
                const config = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://musicdemons.com/api/v1/artist/12",
                    "method": "GET",
                    "headers": {
                      "with": "songs,members"
                    }
                }
                const data = await axios.get(`https://musicdemons.com/api/v1/artist/${id}`, config)
                commit('SET_ARTIST', data);
            } else {
                console.log(status, data);
            }
        } catch (e) {
            console.warn(e);
        }
    }
};

const getters = {
    getArtist (state) {
        return state.artist
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}