// nuxt.config.js
export default defineNuxtConfig({
  compatibility: { mode: 'compatibility' },
  devtools: { enabled: true },

  css: [
    '~/assets/css/tailwind.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    layout: 'sidebar-with-header',  
  },

  compatibilityDate: '2025-01-19'
})