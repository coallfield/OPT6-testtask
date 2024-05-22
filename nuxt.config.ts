// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@/assets/styles/main.scss'
  ],

  modules: ["@nuxt/image", "@pinia/nuxt"],
 app: {
  head: {
    link: [
      { href: "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap", rel: "stylesheet" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {rel: "preconnect", href: "https://fonts.gstatic.com"}
    ]
  }
 }
})