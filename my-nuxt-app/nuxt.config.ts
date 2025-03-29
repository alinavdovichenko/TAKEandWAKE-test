// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/styles/main.scss'],
  app: {
    head: {
      title: 'T&W',
      meta: [
        { name: 'description', content: ' сеть кофеен Take and Wake' },
        { charset: 'utf-8' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  modules: [
    '@pinia/nuxt'
  ],
})
