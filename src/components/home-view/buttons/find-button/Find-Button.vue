<template>
    <a class="button is-info is-rounded" style="display:block;margin:auto;" @click="dispatchGetStartedClick()">GET STARTED</a>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    
    methods: {
        dispatchGetStartedClick () {
            this.$emit('dispatchGetStartedClick', 'dispatching find click');
        }
    }
}
    
</script>
