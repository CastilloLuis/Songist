<template>
    <a class="button is-info is-rounded getstarted" style="width: 35%" @click="dispatchGetStartedClick()">GET STARTED</a>
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