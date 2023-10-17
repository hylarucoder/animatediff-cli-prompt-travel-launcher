// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-electron",
    "@ant-design-vue/nuxt",
  ],
  electron: {
    transpile: process.env.NODE_ENV === "production"
      ? [
        "naive-ui",
        "vueuc",
        "@css-render/vue3-ssr",
        "@juggle/resize-observer",
      ] : ["@juggle/resize-observer"],
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: "electron/main.ts",
      },
      {
        entry: "electron/preload.ts",
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
          // instead of restarting the entire Electron App.
          options.reload()
        },
      },
    ],
    renderer: {},
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
