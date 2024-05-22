<template>

    <section class="section-form">
        <UIForm @openYoutubePopup="(bool: boolean) => setPopup(bool)" :isPopup="isPopup">
        </UIForm>
        <div class="section-form__image-container">
            <img src="~~/static/laptop.png">
        </div>
    </section>
    <section class="section-advantages">
        <h3 class="section-advantages__title">Плюсы использования сервиса «Компас» для анализа штрафов</h3>
        <HomeMainAdvantageList></HomeMainAdvantageList>
    </section>
    <section class="section-slider">
        <UISlider></UISlider>
    </section>

    <UIPopup @click="setPopup(false)" v-if="isPopup">
        <div class="popup-content">
            <span @click="setPopup(false)" class="popup-content__close-popup">✖</span>
            <div @click.stop>
                <iframe class="popup-content__iframe" width="560" height="315" src="https://www.youtube.com/embed/EEoQAoEGLhw&t"
                    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>

    </UIPopup>

    <UIPopup v-if="userDataStore.isSuccess">
        <div class="popup-content">
            <div>ДАННЫЕ ОТПРАВЛЕНЫ</div>
        </div>
    </UIPopup>


</template>


<script lang="ts" setup>
import { useUserDataStore } from '~/stores/user-data';
const userDataStore = useUserDataStore()
const isPopup = ref(false)
const setPopup = (bool: boolean) => {
    isPopup.value = bool
}

</script>

<style lang="scss">
@import '@/assets/styles/home-main/advantages';
@import '@/assets/styles/home-main/main';
@import '@/assets/styles/home-main/slider';


</style>