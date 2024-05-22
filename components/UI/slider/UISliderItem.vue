<template>

    <div v-for="(document, index) in props.documents" :key="index" class="slider__card">
        <div class="slider__card__info">
            <h3 class="slider__card__title">{{ document.title }}</h3>
            <p class="slider__card__descr">{{ document.description }}</p>
        </div>
        <button class="slider__card__button" @click="$router.push({ path: '/document', query: { navPage: `${document.title}` } })">Перейти</button>
    </div>
</template>


<script setup lang="ts">
import type { IDocument } from '~/interfaces/IDocument';

const props = defineProps<{
    documents: IDocument[]

}>()

</script>

<style lang="scss">
@import '@/assets/styles/home-main/slider.scss';
</style>