const express = require('express');
const axios = require('axios')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtBlog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com',  crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/core-components.js',
    '~/plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',    
  ],
  axios: {
    baseURL: 'https://nuxt-blog-955ef-default-rtdb.firebaseio.com'
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  loading: {
    color: 'green',
    height: '2px',
    duration: 5000
  },
  env: {
    baseUrl:  'https://nuxt-blog-955ef-default-rtdb.firebaseio.com',
    fbAPIKEY: 'AIzaSyByol5cFffmiufncKqxB2hsrlzTsMMgKTM'
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  router: {
    middleware: 'log'
  },
  serverMiddleware: [
    express.json(),
    '~/api'
  ],
  generate: {
    routes: async function (){
      const response = await axios.get('https://nuxt-blog-955ef-default-rtdb.firebaseio.com/posts.json')
      .catch(error => console.log(error))
      const routes = [];
      for(const key in response.data) {
        routes.push(`/posts/${key}`)
      }

      return routes;
    }
  }
}
