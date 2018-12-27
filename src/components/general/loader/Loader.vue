<template>
    <b-loading :is-full-page="true" :active.sync="isLoaderActive" :can-cancel="isLoaderCanceled"></b-loading>
</template>

<script>
export default {
    props: ['isLoaderActive', 'isLoaderCanceled']
}
</script>