<template>

<section style="padding: 40px 40px 24px 40px; margin-top: 0%;">
    <div class="columns is-full-mobile is-two-thirds-tablet" >
        <div v-if="notFound" class="column has-text-centered" style="margin-top: 20%">
            <h1 style="color: white;" class="title is-3">Sorry, there is not result 😔</h1>
            <router-link to="/"><a class="button is-warning is-rounded" style="font-weight: bold;">🔙 GO BACK</a></router-link>
        </div>
        <div class="column" v-if="!notFound">
            <div class="" style="margin-top: 10%">
                <div class="container is-fluid">
                    <img :src="artistData.picture_big" alt="" style="width: 100%; border-radius: 50%; border: 4px solid rgb(221, 221, 221)">
                </div>
                <div class=" has-text-centere">
                    <div style="text-align: center">
                        <h1 class="title is-3" style="color: white;">{{artistData.name}}</h1>
                    </div>
                </div>
            </div>

        </div>
        <div class="column is-three-fifths" v-if="!notFound">
            <div style="text-align: center; margin-bottom: 1%;">
                 <b-tag type="is-warning" size="is-large" style="font-weight: bold;">🎶🎵 HITS 🎶🎵</b-tag>
            </div>
            <b-table
                :data="artistTopTracks"
                paginated
                :per-page="3"
                default-sort="user.released"
                style="background-color: white;"
            >

                <template slot-scope="props">

                    <b-table-column field="id" label="ID" width="40" numeric centered sortable >
                        {{ props.row.id }} 
                    </b-table-column>

                    <b-table-column field="title" label="Song Name" sortable centered>
                        {{ props.row.title }}
                    </b-table-column>

                    <b-table-column field="preview" label="Preview" sortable centered>
                        <audio :id="props.row.id" :src="props.row.preview" :ref="props.row.id">
                        </audio>
                        <button @click="playPreview(props.row.id)" :ref="props.row.id+'action'" style="background-color: transparent; border: none; font-size: 25px; outline: none">🔈</button>
                    </b-table-column>

                </template>

            </b-table>

        </div>
    </div>
</section>

    
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        data () {
            return {
                artistData: '',
                artistTopTracks: [],
                click: 0,
                isPlaying: false,
                notFound: false
            }
        },

        computed: {
            ...mapGetters(['getArtist', 'getArtistTopTracks'])
        },

        methods: {
            playPreview(id) {
                const PLAYER_ELEMENT = this.$refs[(id.toString())];
                const PLAYER_ICON = this.$refs[`${id.toString()}action`];
                if(!this.isPlaying) {
                    this.isPlaying = true
                    PLAYER_ELEMENT.play();
                    PLAYER_ICON.innerHTML = "🔊"
                } else {
                    this.isPlaying = false
                    PLAYER_ELEMENT.pause()
                    PLAYER_ICON.innerHTML = "🔈"
                }
            }
        },

        created () {
            this.artistData = this.getArtist;
            this.artistTopTracks = this.getArtistTopTracks.data;
            if(typeof this.artistTopTracks === 'undefined') {
                this.notFound = true;
            }
            console.log(this.artistData)
            console.log(this.artistTopTracks)
        }
    }
</script>
