<template>
    <div class="slider">
        <h2 class="slider__name">Документы</h2>
        <div class="slider__carousel" :style="{ 'margin-left': '-' + ((innerWidth > 1190 ? 2250 : (innerWidth > 780 ? 1500 : 750 )) * currentSlideIndex) + 'px' }">
        
                <UISliderItem :documents="homeDataStore.documents"></UISliderItem>
           
               
            
        </div>
        <button @click="currentSlideIndex = Slider.prevSlide(currentSlideIndex, innerWidth, homeDataStore.documents.length)" class="slider__prev-button"></button>
        <button @click="currentSlideIndex = Slider.nextSlide(currentSlideIndex, innerWidth, homeDataStore.documents.length)" class="slider__next-button"></button>
        <div class="slider__circles">
            <div v-for="(slide, index) in homeDataStore.documents.length / (innerWidth < 780 ? 1 : (innerWidth < 1190 ? 2 : 3))" class="slider__circle"
                :class="{ 'slider__circle_current-slide': currentSlideIndex === index }"></div>
        </div>

    </div>

</template>


<script setup lang="ts">
import { useHomeDataStore } from '~/stores/home-data';
import Slider from '~/composables/slider';
import { useWidth } from '~/composables/useWidth';

const homeDataStore = useHomeDataStore()
const {currentSlideIndex, innerWidth} = useWidth()

</script>


<style lang="scss">
@import '@/assets/styles/home-main/slider.scss';
</style>