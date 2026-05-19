export default defineNuxtConfig({
  compatibilityDate: "2026-05-19",
  devtools: { enabled: true },
  pages: true,
  css: ["vuetify/styles"],
  modules: ["vuetify-nuxt-module"],
  ssr: false,

  app: {
    baseURL: "/nte-daily/",
  },
});
