<template>

        <div class="mobile-features__popup">
                <ul >
                        <li><nuxt-link class="mobile-features__link"
                                        :to="{ path: '/about', query: { title: 'Тарифы' } }">Тарифы</nuxt-link></li>
                        <li><nuxt-link class="mobile-features__link"
                                        :to="{ path: '/about', query: { title: 'Контакты' } }">Контакты</nuxt-link></li>
                        <li>
                                <nuxt-link class="mobile-features__link" :to="{ path: '/about', query: { title: '+7 495 118-44-22' } }">+7 495
                                        118-44-22</nuxt-link>
                        </li>
                        <li><nuxt-link class="mobile-features__link"
                                        :to="{ path: '/about', query: { title: 'Вход' } }">Вход</nuxt-link></li>
                        <li><nuxt-link 
                                        @click="$router.push({ path: '/about', query: { title: 'Регистрация' } })"
                                        class="mobile-features__link">Регистрация</nuxt-link></li>
                </ul>
        </div>
</template>

<style lang="scss">
@import '../../assets/styles/header/mobile-header.scss';
</style>