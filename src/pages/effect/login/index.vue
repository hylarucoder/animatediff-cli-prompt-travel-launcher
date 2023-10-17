<template>
  <div id="effect-login-index">
    <div class="one-block-1">
      <span> 1. 登录 </span>
    </div>
    <div class="one-block-2">
      <a-space>
        <a-button @click="loginWindow()">切换为登录窗口</a-button>
      </a-space>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ipcApiRoute } from "@/api/main"
import { ipc } from "@/utils/ipcRenderer"

const router = useRouter()

const loginWindow = () => {
  router.push({ name: "SpecialLoginWindow", params: {} })
  ipc.invoke(ipcApiRoute.loginWindow, { width: 400, height: 300 }).then((r) => {
    //
  })
}
</script>
<style lang="less" scoped>
#effect-login-index {
  padding: 0 10px;
  text-align: left;
  width: 100%;

  .one-block-1 {
    font-size: 16px;
    padding-top: 10px;
  }

  .one-block-2 {
    padding-top: 10px;
  }
}
</style>
