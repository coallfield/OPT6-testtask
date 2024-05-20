<template>

<div class="mobile-features__popup">
        <ul>
            <li class="mobile-features__popup__link"><nuxt-link class="link"
                    :to="{ path: '/about', query: { title: 'Тарифы' } }">Тарифы</nuxt-link></li>
            <li class="mobile-features__popup__link"><nuxt-link class="link"
                    :to="{ path: '/about', query: { title: 'Контакты' } }">Контакты</nuxt-link></li>
            <li class="mobile-features__popup__link">
                <div>+7 495 118-44-22</div>
            </li>
            <li class="mobile-features__popup__link"><nuxt-link class="link"
                    :to="{ path: '/about', query: { title: 'Вход' } }">Вход</nuxt-link></li>
            <li class="mobile-features__popup__link"><button
                    @click="$router.push({ path: '/about', query: { title: 'Регистрация' } })"
                    class="registration__button">Регистрация</button></li>
        </ul>
    </div>
</template>