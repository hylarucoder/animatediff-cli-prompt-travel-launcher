<script lang="ts" setup>
import { NConfigProvider, enUS, dateEnUS, darkTheme } from "naive-ui"
import type { GlobalTheme } from "naive-ui"

const theme = ref<GlobalTheme | null>(null)
</script>
<template>
  <n-config-provider

    :theme="theme"
    :locale="enUS" :date-locale="dateEnUS">
    <n-message-provider>
      <div class="flex justify-center items-center select-none text-zinc-700 text-sm bg-amber-300"
           style="height: var(--nav-header-height); -webkit-app-region: drag">
        Animatediff Cli Prompt Travel Launcher
      </div>
      <div class="flex h-screen">

        <!-- Sidebar -->
        <div class="bg-gray-500 text-white w-20 flex flex-col items-center">
          <!-- Your logo here -->
          <div class="my-4">
            <i class="fas fa-hashtag text-4xl"></i>
          </div>
          <!-- Sidebar buttons -->
          <div>
            <nuxt-link to="/">
              <button class="my-2 w-14 h-14 rounded-full focus:outline-none focus:ring">
                <i class="fas fa-home">Launch</i>
              </button>
            </nuxt-link>
            <nuxt-link to="/t2v">
              <button class="my-2 w-14 h-14 rounded-full focus:outline-none focus:ring">
                <i class="fas fa-home">t2v</i>
              </button>
            </nuxt-link>
            <nuxt-link to="/v2v">
              <button class="my-2 w-14 h-14 rounded-full focus:outline-none focus:ring">
                <i class="fas fa-home">v2v</i>
              </button>
            </nuxt-link>
          </div>
        </div>
        <div class="border-gray-400" style="height: calc(100vh - var(--nav-header-height));">
          <n-space>
            <n-button @click="theme = darkTheme">
              Dark
            </n-button>
            <n-button @click="theme = null">
              Light
            </n-button>
          </n-space>
          <slot />
        </div>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>
