<template>

    <section class="section-form">
        <AppForm @openDataPopup="openDataPopup()" @openYoutubePopup="(bool) => setPopup(bool)" :isPopup="isPopup">
        </AppForm>
        <div class="image-container">
            <img src="../static/laptop.png">
        </div>
    </section>
    <section class="advantages">
        <h3>Плюсы использования сервиса «Компас» для анализа штрафов</h3>
        <AdvantageList></AdvantageList>
    </section>
    <section class="slider">
        <AppSlider></AppSlider>
    </section>
    <YoutubePopup @closePopup="(bool) => setPopup(bool)" v-if="isPopup"></YoutubePopup>
    <SuccessPopup v-if="isDataPopup"></SuccessPopup>


</template>


<script lang="ts" setup>



const isPopup = ref(false)
const isDataPopup = ref(false)

const setPopup = (bool: boolean) => {
    isPopup.value = bool
}
const openDataPopup = () => {
    isDataPopup.value = true;
    setTimeout(() => {
        isDataPopup.value = false
    }, 1000)
}
</script>

<style lang="scss">
@import './assets/styles/advantages.scss';
@import './assets/styles/main.scss';
@import './assets/styles/slider.scss';


</style>