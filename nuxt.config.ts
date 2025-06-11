// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  build: { transpile: ['@fortawesome/vue-fontawesome'], },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  content: {
    // experimental features can be added here if needed
    documentDriven: true
  },
})