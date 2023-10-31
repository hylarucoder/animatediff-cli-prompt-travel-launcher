// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@ant-design-vue/nuxt",
  ],
  build: {
    transpile: process.env.NODE_ENV === "production"
      ? [
        "naive-ui",
        "vueuc",
        "@css-render/vue3-ssr",
        "@juggle/resize-observer",
      ] : ["@juggle/resize-observer"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  css: [
    "~/assets/main.css",
    "~/assets/global.less",
  ],
  srcDir: "src",
  ssr: false,
  router: {
    options: {
      hashMode: true,
    },
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc"]
          : [],
    },

  },
})
