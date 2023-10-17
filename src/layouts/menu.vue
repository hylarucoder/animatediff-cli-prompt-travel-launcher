<template>
  <a-layout id="app-menu">
    <a-layout-sider theme="light" class="layout-sider">
      <a-menu theme="light" mode="inline" :selectedKeys="[current]" @click="changeMenu">
        <a-menu-item v-for="(menuInfo, subIndex) in menu" :key="subIndex">
          <nuxt-link :to="menuInfo.pageName">
            <span>{{ menuInfo.title }}</span>
          </nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content>
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import subMenu from "@/router/subMenu"

const router = useRouter()
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
})

const menu = ref({})
const current = ref("menu_100")
const keys = ref([])

const menuHandle = () => {
  // 该组件优先被加载了，所以没拿到参数
  //console.log('params:', this.$route);

  console.log("menu ------ id:", props.id)
  menu.value = subMenu[props.id]
  const linkInfo = menu.value[current.value]
  router.push(linkInfo.pageName)
}

watchEffect(() => {
  // id
  current.value = "menu_100"
  menuHandle()
})


const changeMenu = (e) => {
  console.log("changeMenu e:", e)
  current.value = e.key
}
</script>
<style lang="less" scoped>
#app-menu {
  height: 100%;
  text-align: center;

  .layout-sider {
    border-top: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    background-color: #fafafa;
    overflow: auto;
  }
}
</style>
