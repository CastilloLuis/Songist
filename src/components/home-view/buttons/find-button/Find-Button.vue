<template>
    <a class="button is-info is-rounded" style="width: 30%" @click="dispatchGetStartedClick()">GET STARTED</a>
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
