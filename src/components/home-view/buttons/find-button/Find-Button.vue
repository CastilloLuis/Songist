<template>
    <a class="button is-info is-rounded" @click="dispatchFindClick()">FIND YOUR SONG</a>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    
    methods: {
        dispatchFindClick () {
            this.$emit('dispatchFindClick', 'dispatching find click');
        }
    }
}
    
</script>
