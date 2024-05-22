<template>
    <header class="header">
        <div class="dekstop-features" v-if="screenWidth > 1000">
            <HeaderDekstop></HeaderDekstop>
        </div>
        <section v-else class="mobile-features">
            <HeaderMobileBurger></HeaderMobileBurger>
        </section>
    </header>
</template>

<script lang="ts" setup>





const screenWidth = ref(1920)
onMounted(() => {
    screenWidth.value = window.innerWidth
    window.addEventListener('resize', () => {
        screenWidth.value = window.innerWidth
    })
})
</script>

<style lang="scss">
@import './assets/styles/header/header.scss';
</style>