<template>

<section style="padding: 20px 20px 20px 20px; margin-top: 0%">
    <div class="columns">
        <div v-if="notFound" class="column has-text-centered" style="margin-top: 20%">
            <h1 style="color: white;" class="title is-3">Sorry, there is not result 😔</h1>
            <router-link to="/"><a class="button is-warning is-rounded" style="font-weight: bold;">🔙 GO BACK</a></router-link>
        </div>
        <div class="column" v-if="!notFound">
            <div style="text-align: center; margin-bottom: 1%;">
                 <b-tag type="is-warning" size="is-large" style="font-weight: bold;">🎶🎵 HITS 🎶🎵</b-tag>
            </div>
            <b-table
                :data="songsResult"
                hoverable
                paginated
                per-page="3"
                default-sort="user.released"
                style="background-color: white; padding: 10px 10px 10px 10px"
            >

                <template slot-scope="props">

                    <b-table-column field="id" label="ID" width="150" numeric centered sortable >
                        {{ props.row.id }}
                    </b-table-column>

                    <b-table-column field="albumCover" width="160"  label="Album Cover" centered>
                        <img :src="props.row.album.cover_big" style="width: 100%"/>
                    </b-table-column>

                    <b-table-column field="title" label="Song Name"  width="200" sortable centered>
                        {{props.row.album.title}}
                    </b-table-column>

                    <b-table-column field="artistName" label="Artist" sortable centered>
                        {{props.row.artist.name}}
                    </b-table-column>

                    <b-table-column field="info" label="Preview" sortable centered>
                        <a class="button is-primary is-rounded" @click="activeModal(props.row)">Get Song</a>
                    </b-table-column>

                    <!--<b-table-column field="released" label="Preview" centered>
                        <audio :id="props.row.id" :src="props.row.preview" :ref="props.row.id">
                        </audio>
                        <button @click="playPreview(props.row.id)" :ref="props.row.id+'action'" style="background-color: transparent; border: none; font-size: 25px; outline: none">🔈</button>
                    </b-table-column>-->

                </template>

            </b-table>

        </div>
    </div>

        <b-modal v-if="isModalActive" :active.sync="isModalActive" :width="640" scroll="keep">
            <div class="card" style="background-color: transparent">
                <div class="card-image">
                    <img :src="modalData.album.cover_big" alt="Image" style="width: 50%; border-radius: 50%; margin-bottom: 5%; display:block; margin:auto;">
                </div>
                <div class="card-content" style="background-color: white; border-radius: 2%">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img :src="modalData.artist.picture_big" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{modalData.artist.name}}</p>
                            <a class="button" style="margin-left: 70%">Get Top Tracks</a>
                        </div>
                    </div>

                    <div class="content">
                        <video controls="" autoplay="" name="media" style="display: block; margin: auto; height: 50px; width: 100%">
                            <source :src="modalData.preview" type="audio/mpeg">
                        </video>
                    </div>
                </div>
            </div>
        </b-modal>   
</section>

    
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        components: {
        },
        data () {
            return {
                songsResult: [],
                isModalActive: false,
                modalData: '',
                notFound: false
            }
        },

        computed: {
            ...mapGetters(['getSearchedSong'])
        },

        methods: {
            activeModal(data) {
                this.isModalActive = true;
                this.modalData = data;
            }
        },

        created () {
            const { data } = this.getSearchedSong;
            this.songsResult = data;
            if(this.songsResult.length === 0){
                this.notFound = true;
            }
        }
    }
</script>
