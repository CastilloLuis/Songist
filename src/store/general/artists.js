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
    getArtistByName: async ({commit}, name) => {
        console.log('getting artist by name :)');
        try {
            const {status, data} = await axios.get(`https://musicdemons.com/api/v1/artist/organic-search/${name}`);
            if (status === 20) {
                console.warn(data);
            } else {
                console.log(status, data);
            }
            
        } catch (e) {
            console.warn(e);
        }
    }
};

export default {
    state,
    mutations,
    actions,
}