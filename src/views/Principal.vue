<template>

<section style="padding: 20px 20px 20px 20px; margin-top: 0%">
    <Cover></Cover>
</section>

    
</template>

<script>
import { mapGetters } from 'vuex';
import Cover from '../components/general/TopSlider/Top';

    export default {
        components: {
            Cover
        },
        data () {
            return {
                artistData: '',
                artistTopTracks: []
            }
        },

        computed: {
            ...mapGetters(['getArtist', 'getArtistTopTracks'])
        },

        created () {
            this.artistData = this.getArtist;
            this.artistTopTracks = this.getArtistTopTracks;
            console.log(this.artistData)
            console.log(this.artistTopTracks)
        }
    }
</script>
