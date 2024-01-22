// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages : true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // '@nuxtjs/supabase'
  ],
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public :{
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  app : {
    head : {
      script : [
        { src:'https://js.stripe.com/v3/', defer: true }
      ]
    }
  }
})
