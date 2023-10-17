<template>
  <div class="flex justify-center items-center text-zinc-700 text-sm"
       style="height: var(--nav-header-height); -webkit-app-region: drag">
    Animatediff
  </div>
  <a-layout id="app-layout-sider">
    <a-layout-sider v-model="collapsed" theme="light" class="layout-sider" width="100">
      <div class="logo">
        <img class="pic-logo" src="../assets/logo.png" />
      </div>
      <a-menu class="menu-item" theme="light" mode="inline" :selectedKeys="[current]" @click="menuHandle">
        <a-menu-item v-for="(menuInfo, index) in menu" :key="index">
          <icon-font :type="menuInfo.icon" />
          {{ menuInfo.title }}
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="layout-content">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
const collapsed = ref(true)
const current = ref("menu_1")
const menu = ref({
  menu_1: {
    icon: "icon-fengche",
    title: "框架",
    pageName: "/framework",
    params: {
      // test: 'hello'
    },
  },
  menu_2: {
    icon: "icon-niudan",
    title: "系统",
    pageName: "/os",
    params: {},
  },
  menu_3: {
    icon: "icon-xiangji",
    title: "硬件",
    pageName: "/hardware",
    params: {},
  },
  menu_4: {
    icon: "icon-liuxing",
    title: "特效",
    pageName: "/effect",
    params: {},
  },
  menu_5: {
    icon: "icon-liuxing",
    title: "图片",
    pageName: "/image",
    params: {},
  },
})
const router = useRouter()
const menuHandle = (e) => {
  console.log("sider menu e:", e)
  current.value = e ? e.key : current.value
  console.log("sider menu current:", current.value)

  const linkInfo = menu.value[current.value]
  console.log("[home] load linkInfo:", linkInfo)
  router.push(linkInfo.pageName)
}
const changeMenu = (e) => {
  console.log("sider menu e:", e)
  //this.current = e.key;
}
// onMounted(() => {
//   menuHandle()
// })
</script>
<style lang="less" scoped>
// 嵌套
#app-layout-sider {
  height: calc(100vh - var(--nav-header-height));

  .logo {
    border-bottom: 1px solid #e8e8e8;
  }

  .pic-logo {
    height: 32px;
    //background: rgba(139, 137, 137, 0.2);
    margin: 10px;
  }

  .layout-sider {
    border-top: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
  }

  .menu-item {
    .ant-menu-item {
      background-color: #fff;
      margin-top: 0px;
      margin-bottom: 0px;
      padding: 0 0px !important;
    }
  }

  .layout-content {
    //background-color: #fff;
  }
}
</style>
