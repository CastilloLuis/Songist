<template>
    <div class="bounceIn">
        <b-field label="" expanded>
            <b-field>
                <b-input placeholder="Keyword" size="is-medium" :disabled="isSearching"></b-input>
                <b-select placeholder="TYPE" size="is-medium" :disabled="isSearching">
                    <option>ARTIST</option>
                    <option>SONG</option>
                    <option>LYRIC</option>
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
            isSearching: false
        }
    },
    
    methods: {
        search () {
            this.isSearching = true;
        }
    }
}
</script>

<style>
    @import './Search-Input.css';
</style>