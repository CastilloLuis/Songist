<template>

<section style="padding: 20px 20px 20px 20px; margin-top: 0%; width: 100%">
    <Loader :isLoaderActive="isLoaderActive" :isLoaderCanceled="isLoaderCanceled"></Loader>

    <div style="margin-bottom: 4%;">
        <Cover @sliderLoaded="handleSliderLoaded()"></Cover>
    </div>
</section>

    
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import Cover from '../components/general/TopSlider/Top';
import Loader from '../components/general/loader/Loader';

    export default {
        components: {
            Cover, Loader
        },
        data () {
            return {
                isLoaderActive: true,
                isLoaderCanceled: false,
                topArtists: []
            }
        },

        computed: {
            ...mapGetters(['getTopArtists'])
        },

        methods: {
            handleSliderLoaded() {
                this.isLoaderActive = false;
                this.isLoaderCanceled = true;
                const { data } = this.getTopArtists;
                this.topArtists = data;   
            }
        }
        
    }
</script>

<style>

.img {
    transition: all 0.5s ease-in-out;
}

.img:hover{
    transform: scale(1.2);
    z-index: 99999999999999999999999
}


    
</style>
