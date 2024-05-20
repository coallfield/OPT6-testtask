<template>
    <div  class="about-title">
        <h1 >{{ route.query.title }}</h1>
    </div>


</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();



</script>

<style lang="scss">
 @import './assets/styles/about-page.scss';
</style>