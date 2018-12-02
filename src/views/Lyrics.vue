<template>
    <div class="container is fluid">
        <div class="columns">
            <div class="column is-two-fifths">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/480x480.png" style="margin-left: 20%; width: 60%; border-radius: 50%">
            </div>
            <div class="column">
                <lyric-card></lyric-card>
            </div>
        </div>
        
    </div>
</template>

<script>
    import Card from '../components/lyrics-view/card/Card';
    export default {
        data () {
            return {

            }
        },
        components: {
            'lyric-card': Card
        }
    }
</script>