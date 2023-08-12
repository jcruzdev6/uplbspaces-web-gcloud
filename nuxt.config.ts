import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
  ],
  imports: {
    dirs: ['stores'],
  },
  runtimeConfig: {
    public: {
      jsonApiUrl: 'http://localhost:8000',
      jsonApiPath: 'http://localhost:8000/api',
      webUrl: 'http://localhost:3000',
    } 
  },
  vite: {
    assetsInclude: ["**/*.JPG"]
  },
  css: [
    '~/assets/scss/main.scss',
    '~/assets/css/main.css',
  ],
  plugins: [ 
    { src: '~/plugins/useBootstrap.client.ts', mode: 'client' }
  ],
  /*app: {
    head: {
      script: [
        {
          src: "@/assets/js/calendar.js",
          type: "text/javascript",
        },
      ],
    },
  },*/
})