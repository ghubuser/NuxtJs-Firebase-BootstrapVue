export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    htmlAttrs: {
      lang: "ja"
    },
    title: "Nuxt.js | Firebase | BootstrapVue",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A template with Nuxt.js, Firebase, BootstrapVue"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
        integrity:
          "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",
        crossorigin: "anonymous"
      }
    ],
    script: [
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js",
        integrity:
          "sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW",
        crossorigin: "anonymous",
        body: true
      }
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: ["bootstrap-vue/nuxt"],

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: [],

  /*
   ** Nuxt.js runtime config property
   ** Doc: https://ja.nuxtjs.org/docs/2.x/directory-structure/nuxt-config#runtimeconfig
   */
  publicRuntimeConfig: {}
};
