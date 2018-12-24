<template>

<section style="padding: 20px 20px 20px 20px; margin-top: 0%">
    <Loader :isLoaderActive="isLoaderActive" :isLoaderCanceled="isLoaderCanceled"></Loader>
    <Cover></Cover>
</section>

    
</template>

<script>
import { mapGetters } from 'vuex';
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
            }
        },

        computed: {
        },

        methods: {
            setLoaderTime() {
                setTimeout(() => {
                    this.isLoaderActive = false;
                    this.isLoaderCanceled = true;
                }, 3500);
            }
        },

        created () {
            this.setLoaderTime()
        }
    }
</script>
