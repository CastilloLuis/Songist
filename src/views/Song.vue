<template>

<section style="padding: 20px 20px 20px 20px; margin-top: 0%">
    <div class="columns">
        <div class="column">
            <div style="text-align: center; margin-bottom: 1%;">
                 <b-tag type="is-warning" size="is-large" style="font-weight: bold;">🎶🎵 HITS 🎶🎵</b-tag>
            </div>
            <b-table
                :data="songsResult"
                paginated
                per-page="5"
                default-sort="user.released"
                style="background-color: white; padding: 10px 10px 10px 10px"
            >

                <template slot-scope="props">

                    <b-table-column field="id" label="ID" width="80" numeric centered sortable >
                        {{ props.row.id }} 
                    </b-table-column>

                    <b-table-column field="albumCover" width="150"  label="Album Cover" sortable centered>
                        <img :src="props.row.album.cover_big" style="width: 100%"/>
                    </b-table-column>

                    <b-table-column field="title" label="Song Name"  width="200" sortable centered>
                        {{props.row.album.title}}
                    </b-table-column>

                    <b-table-column field="title" label="Artist" sortable centered>
                        {{props.row.artist.name}}
                    </b-table-column>

                    <b-table-column field="released" label="Preview" sortable centered>
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
        components: {
        },
        data () {
            return {
                songsResult: []
            }
        },

        computed: {
            ...mapGetters(['getSearchedSong'])
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
            const { data } = this.getSearchedSong;
            this.songsResult = data;
        }
    }
</script>
