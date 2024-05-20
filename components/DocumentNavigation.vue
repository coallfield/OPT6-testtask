<template>

    <div class="navigation">
        <p class="nav-item">Главная страница</p>
        <div class="circle"></div>
        <p class="nav-item">Документы</p>
        <div class="circle"></div>
        <p class="nav-item"><span>{{ route.query.navPage }}</span></p>
    </div>
    <div class="document-title">
        <h1>{{ route.query.navPage }}</h1>
    </div>
</template>


<script lang="ts" setup>

import {useRoute} from 'vue-router'

const route = useRoute()

</script>
<style lang="scss">
 @import './assets/styles/document-page.scss';
</style>