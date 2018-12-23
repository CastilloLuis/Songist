<template>

    <carousel :perPage="4" :paginationEnabled="false">
        <slide v-for="(track, index) in tracks" v-bind:key="index">
            <Cover :img="track.album.cover_xl" :title="track.title" :id="index" :artistName="track.artist.name"></Cover>
        </slide>
    </carousel>
    
</template>

<script>
import { mapGetters } from 'vuex';
import Cover from './Cover';

    export default {
        components: {
            Cover
        },
        data () {
            return {
                tracks: []
            }
        },

        computed: {
            ...mapGetters(['getTopSongs'])
        },

        async created () {
            await this.$store.dispatch('getTopSongs');
            const { data } = this.getTopSongs;
            console.log(data)
            this.tracks = data;
        }
    }
</script>
