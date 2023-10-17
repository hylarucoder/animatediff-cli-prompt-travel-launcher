import Vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import viteCompression from "vite-plugin-compression"
import Pages from "vite-plugin-pages"
import electron from "vite-plugin-electron"


import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import Markdown from "unplugin-vue-markdown/vite"
import VueMacros from "unplugin-vue-macros/vite"
import VueI18n from "@intlify/unplugin-vue-i18n/vite"
import Layouts from "vite-plugin-vue-layouts"
import Shiki from "markdown-it-shiki"
// import LinkAttributes from "markdown-it-link-attributes"

import path from "path"
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    // 项目插件
    plugins: [
      electron([
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
      ]),
      VueMacros({
        plugins: {
          vue: Vue({
            include: [/\.vue$/, /\.md$/],
          }),
        },
      }),
      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ["vue", "md"],
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts(),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 1025,
        algorithm: "gzip",
        ext: ".gz",
      }),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: ["vue", "vue-router", "vue-i18n", "@vueuse/head", "@vueuse/core"],
        dts: "src/auto-imports.d.ts",
        dirs: ["src/composables", "src/stores"],
        vueTemplate: true,
      }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ["vue", "md"],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: "src/components.d.ts",
      }),
      // https://github.com/unplugin/unplugin-vue-markdown
      // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
      Markdown({
        wrapperClasses: "prose prose-sm m-auto text-left",
        headEnabled: true,
        markdownItSetup(md) {
          // https://prismjs.com/
          md.use(Shiki, {
            theme: {
              light: "vitesse-light",
              dark: "vitesse-dark",
            },
          })
          // md.use(LinkAttributes, {
          //   matcher: (link: string) => /^https?:\/\//.test(link),
          //   attrs: {
          //     target: "_blank",
          //     rel: "noopener",
          //   },
          // })
        },
      }),
      // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
        include: [path.resolve(__dirname, "locales/**")],
      }),
    ],
    // 基础配置
    base: "./",
    publicDir: "public",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            "@border-color-base": "#dce3e8",
          },
          javascriptEnabled: true,
        },
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      brotliSize: false,
      sourcemap: false,
      minify: "terser",
      terserOptions: {
        compress: {
          // 生产环境去除console及debug
          drop_console: false,
          drop_debugger: true,
        },
      },
    },
  }
})
