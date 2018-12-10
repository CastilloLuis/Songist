<template>

<section style="padding: 20px 20px 20px 20px; margin-top: 0%">
    <div class="columns">
        <div class="column">
            <div class="">
                <div class="container is-fluid">
                    <img src="../assets/avatar.png" alt="" style="width: 100%;">
                </div>
                <div class=" has-text-centere">
                    <div>
                        <h1 class="title is-3">{{artistData.name}}</h1>
                        <h1 class="title is-6">
                            {{artistData.name}} was born in {{artistData.members[0].born}}
                            <span v-if="artistData.members[0].died != ''">
                                , and he died in {{artistData.members[0].died}}
                            </span>
                        </h1>
                        <h1 class="title is-6">
                            Career started in: <b-tag type="is-warning" style="font-size: 15px; width: 100px">{{artistData.year_started}}</b-tag>
                        </h1>
                    </div>
                </div>
            </div>

        </div>
        <div class="column is-three-fifths">
            <div style="text-align: center; margin-bottom: 1%;">
                 <b-tag type="is-warning" size="is-large" style="font-weight: bold;">🎶🎵 HITS 🎶🎵</b-tag>
            </div>
            <b-table
                :data="songs"
                paginated
                per-page="5"
                default-sort="user.released"
                style="background-color: white; padding: 10px 10px 10px 10px"
            >

                <template slot-scope="props">

                    <b-table-column field="id" label="ID" width="40" numeric centered sortable >
                        {{ props.row.id }}
                    </b-table-column>

                    <b-table-column field="title" label="Song Name" sortable centered>
                        {{ props.row.title }}
                    </b-table-column>

                    <b-table-column field="released" label="Released" sortable centered>
                        <span class="tag is-success">
                            <!--{{ new Date(props.row.date).toLocaleDateString() }}-->
                            {{new Date(props.row.released).toLocaleDateString()}}
                        </span>
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
                songs: []
            }
        },

        computed: {
            ...mapGetters(['getArtist'])
        },

        created () {
            const { data } = this.getArtist;
            const { songs } = data;
            this.artistData = data;
            this.songs = songs;
            console.warn(this.songs);
            console.warn(this.artistData);
        }
    }
</script>
