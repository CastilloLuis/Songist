<template>

<section>

    <b-table
        :data="songs"
        paginated
        per-page="5"
        default-sort="user.released"
        style="background-color: white"
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
