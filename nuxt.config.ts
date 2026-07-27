// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: { port: 3300 },
  app: {
    head: {
      titleTemplate: '%s - Csituka_D',
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
})
