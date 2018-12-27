<template>
    <div>
        <section v-if="!isMobile" >
            <carousel :perPage="2" :paginationEnabled="false" :autoplayTimeout="1000" :loop="true">
                <slide v-for="(track, index) in tracks" v-bind:key="index">
                    <Cover :img="track.album.cover_xl" :mobile="false" :title="track.title" :id="index" :artistName="track.artist.name"></Cover>
                </slide>
            </carousel>
        </section>
        <section v-if="isMobile" >
            <carousel :perPage="1" :paginationEnabled="false" :autoplayTimeout="1000" :loop="true">
                <slide v-for="(track, index) in tracks" v-bind:key="index">
                    <Cover :img="track.album.cover_xl" :mobile="true" :title="track.title" :id="index" :artistName="track.artist.name"></Cover>
                </slide>
            </carousel>
        </section>
    </div>
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
                tracks: [],
                isMobile: false
            }
        },

        computed: {
            ...mapGetters(['getTopSongs'])
        },

        methods: {
    	detectmob() { 
            if( navigator.userAgent.match(/Android/i)
                //|| navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)
                ){
                    this.isMobile = true;
                } else {
                    this.isMobile = false;
                }
            }
        },

        async created () {
            this.detectmob();
            await this.$store.dispatch('getTopSongs');
            const { data } = this.getTopSongs;
            this.tracks = data;
            this.$emit('sliderLoaded', true)
        }
    }
</script>
