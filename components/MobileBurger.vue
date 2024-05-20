<template>

    <AppLogo></AppLogo>
    <div @click="isPopup = !isPopup" class="features-button">
        <span class="white-line"></span>
        <span style="top: 9px" class="white-line"></span>
        <span style="top: 18px" class="white-line"></span>
    </div>
    <MobilePopup @click.stop v-if="isPopup"></MobilePopup>
</template>

<script lang="ts" setup>

const isPopup = ref(false)

</script>

<style lang="scss">
@import './assets/styles/mobile-popup.scss';
</style>