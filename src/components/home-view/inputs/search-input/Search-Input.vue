<template>
    <div class="bounceIn">
        <b-field label="" expanded>
            <b-field>
                <b-input placeholder="Keyword" size="is-medium" v-model="searchData.keyword" :disabled="isSearching"></b-input>
                <b-select placeholder="TYPE" size="is-medium" :disabled="isSearching" v-model="searchData.type">
                    <option :value="'artist'">ARTIST</option>
                    <option :value="'song'">SONG</option>
                    <option :value="'lyric'">LYRIC</option>
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
    
    methods: {
        async search () {
            this.isSearching = true;
            const { keyword, type } = {...this.searchData};
            try {
                const action = this.selectSearchType(type);
                console.warn(action);
                const data = await this.$store.dispatch(action, keyword);
                console.warn(data);
            } catch (e) {
                console.warn(e);
            }
        },

        selectSearchType (type) {
            switch ((type).toLowerCase()) {
                case 'artist': 
                    return "getArtistByName"
                break;

                case 'song':
                    console.log(keyword)
                break;

                case 'lyric':
                    console.log(keyword)
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