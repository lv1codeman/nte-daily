export default defineNuxtConfig({
  compatibilityDate: "2026-05-19",
  pages: true,
  css: ["vuetify/styles"],
  modules: ["vuetify-nuxt-module"],
  ssr: false,

  app: {
    baseURL: import.meta.env.PROD ? "/nte-daily/" : "/",
  },
});
