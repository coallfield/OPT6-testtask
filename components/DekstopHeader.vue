<template>

    <section class="navigation">
        <nav class="navigation__link">
            <AppLogo></AppLogo>
            <nuxt-link class="link" :to="{ path: '/about', query: { title: 'Тарифы' } }">Тарифы</nuxt-link>
            <nuxt-link class="link" :to="{ path: '/about', query: { title: 'Контакты' } }">Контакты</nuxt-link>
        </nav>
    </section>
    <section class="auth">
        <div class="auth__features">
            <div class="number-container">
                <div>+7 495 118-44-22</div>
            </div>
            <div class="login">
                <nuxt-link class="link" :to="{ path: '/about', query: { title: 'Вход' } }">Вход</nuxt-link>
            </div>
            <div class="registration">
                <button @click="$router.push({ path: '/about', query: { title: 'Регистрация' } })"
                    class="registration__button">Регистрация</button>
            </div>
        </div>
    </section>
</template>