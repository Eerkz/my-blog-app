// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  target: 'static',
  head: {
    title: 'my-blog-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAPRcXCVWaHfr5WqZ6ctHR5M_avaFZ9wW4',
          authDomain: 'my-blog-app-da863.firebaseapp.com',
          projectId: 'my-blog-app-da863',
          storageBucket: 'my-blog-app-da863.appspot.com',
          messagingSenderId: '290783705630',
          appId: '1:290783705630:web:399ae209c25c4ac4f00c0f',
        },
        services: {
          firestore: true,
          auth: {
            persistence: 'local',
            initialize: {
              subscribeManually: false,
            },
            ssr: {
              serverLogin: {
                sessionLifetime: 60 * 60 * 1000,
                loginDelay: 50,
              },
            },
          }, // Just as example. Can be any other service.
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
