export default {
  env: {
    strapiBaseUri: process.env.API_URL || "https://api.56bit.com"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Welcome to 56Bit',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Architect, Deploy and Manage Cloud-Native Architectures with Perpetual Availability and Top-Notch Expert advice Supporting your Business Needs' }
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
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/apollo',
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Apollo module configuration feeding locally from Strapi Admin
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://api.56bit.com/graphql"
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleAnalytics: {
    id: 'UA-194582102-1'
  },

  ssr: false,

  target: static,

  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
