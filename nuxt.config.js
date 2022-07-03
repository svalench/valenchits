export default {
  server: {
    "host": "127.0.0.1",
    "port": "3003",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'valenchits CV',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
   script: [
    ],
  // Global CSS: https://go.nuxtjs.dev/config-css
   css: [
    '~/assets/main.css',
    '~/assets/media.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],


  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
   i18n: {
   locales:[
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.js', name: 'Русский' },
      { code: 'by', iso: 'by-BY', file: 'by.js', name: 'Беларускi' },
      { code: 'ua', iso: 'ua-UA', file: 'ua.js', name: 'Український' },
    ],
   lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ru',
   detectBrowserLanguage: {
    useCookie: true,
     alwaysRedirect: false,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root',
  },
  },
  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  sitemap: {
    hostname: 'https://valenchits.com',
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
}
