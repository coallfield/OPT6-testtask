<template>

    <section class="dekstop-features__navigation">
        <nav class="dekstop-features__links">
            <UILogo></UILogo>
            <nuxt-link class="dekstop-features__link"
                :to="{ path: '/about', query: { title: 'Тарифы' } }">Тарифы</nuxt-link>
            <nuxt-link class="dekstop-features__link"
                :to="{ path: '/about', query: { title: 'Контакты' } }">Контакты</nuxt-link>
        </nav>
    </section>
    <section class="dekstop-features__auth-navigation">
        <nav class="dekstop-features__links">
            <nuxt-link class="dekstop-features__links" :to="{ path: '/about', query: { title: '+7 495 118-44-22' } }">
                <span class="dekstop-features__links_number">+7 495 118-44-22</span></nuxt-link>
            <nuxt-link class="dekstop-features__links"
                :to="{ path: '/about', query: { title: 'Вход' } }">Вход</nuxt-link>
            <button @click="$router.push({ path: '/about', query: { title: 'Регистрация' } })"
                class="dekstop-features__registration-button">Регистрация</button>
        </nav>
    </section>
</template>

<style lang="scss">
@import '@/assets/styles/header/dekstop-header.scss';
</style>