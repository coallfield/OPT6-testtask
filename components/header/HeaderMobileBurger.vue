<template>
    <div class="mobile-features__content">
        <UILogo class="mobile-features__logo"></UILogo>
        <div @click="isPopup = !isPopup" class="mobile-features__burger">
            <span class="mobile-features__burger-line"></span>
            <span style="top: 9px" class="mobile-features__burger-line"></span>
            <span style="top: 18px" class="mobile-features__burger-line"></span>
        </div>
    </div>

    <HeaderMobilePopup @click.stop v-if="isPopup"></HeaderMobilePopup>
</template>

<script lang="ts" setup>

const isPopup = ref(false)

</script>

<style lang="scss">
@import './assets/styles/header/mobile-header.scss';
</style>