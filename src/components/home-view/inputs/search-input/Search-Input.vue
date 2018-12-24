<template>
    <div class="bounceIn">
        <b-field label="" expanded>
            <b-field>
                <b-input placeholder="Keyword" size="is-medium" v-model="searchData.keyword" :disabled="isSearching"></b-input>
                <b-select placeholder="TYPE" size="is-medium" :disabled="isSearching" v-model="searchData.type">
                    <option :value="'artist'">ARTIST</option>
                    <option :value="'song'">SONG</option>
                </b-select>
                <p class="control">
                    <button 
                        class="button is-info is-medium" 
                        v-bind:class="{'is-loading': isSearching}" 
                        @click="search()">
                        🔎
                    </button>
                </p>              
            </b-field>
        </b-field>   
    </div>    
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    data () {
        return {
            isSearching: false,
            searchData: {
                keyword: '',
                type: 'TYPE'
            }
        }
    },

    computed: {
        ...mapState(['artist']),
        ...mapGetters(['getArtist'])
    },
    
    methods: {
        async search () {
            this.isSearching = true;
            const { keyword, type } = {...this.searchData};
            console.log(keyword)
            console.log(type)
            try {
                const action = this.selectSearchType(type);
                console.log(action)
                await this.$store.dispatch(action, keyword);
                this.$emit('status', {type: type, status: 200});
            } catch (e) {
                console.warn(e);
                this.$emit('status', {type: null, status: 400});
            }
        },

        selectSearchType (type) {
            switch ((type).toLowerCase()) {
                case 'artist': 
                    return "getArtistByName"
                break;

                case 'song':
                    return 'getSongsByName'
                break;

                default: break;
            }
        }
    }
}
</script>

<style>
    @import './Search-Input.css';
</style>