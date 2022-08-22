export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-my-blog',
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
  css: ["bootstrap/dist/css/bootstrap.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios-accessor'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    browserBaseURL: 'http://localhost:8080/api/'
  },

  auth: {
    redirect: {
      login: '/login',   // 未ログイン時に認証ルートへアクセスした際のリダイレクトURL
      logout: '/login',  // ログアウト時のリダイレクトURL
      callback: false,   // Oauth認証等で必要となる コールバックルート
      home: false,         // ログイン後のリダイレクトURL
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/auth/me', method: 'get', propertyName: 'user' }
        },
      }
    }
  }
}
