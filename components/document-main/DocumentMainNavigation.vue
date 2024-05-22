<template>

    <div class="document-page__navigation">
        <p class="navigation__item">Главная страница</p>
        <div class="navigation__circle"></div>
        <p class="navigation__item">Документы</p>
        <div class="navigation__circle"></div>
        <p class="navigation__item"><span class="navigation__span">{{ route.query.navPage }}</span></p>
    </div>
    <div class="document-page__title">
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