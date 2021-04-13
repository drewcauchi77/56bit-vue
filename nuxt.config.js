export default {
  env: {
    strapiBaseUri: process.env.API_URL || "https://admin-56bit.stevesandco.com"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '56Bit',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '56Bit delivers best-practice cloud expertise to organisations of any size' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-56bit.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    ['nuxt-cookie-control', {
      barPosition: "bottom-full",
      controlButton: false,
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Apollo module configuration feeding locally from Strapi Admin
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://admin-56bit.stevesandco.com/graphql"
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  ssr: false,

  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
