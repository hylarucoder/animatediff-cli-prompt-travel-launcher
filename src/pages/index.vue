<script setup lang="ts">
import { ref } from "vue"

const upload = ref(null)

const base_path = ref("/Users/twocucao/Workspace/01-Code/projects-aigc/animatediff-cli-prompt-travel-launcher")
const v2 = ref("")
const handleChange = (data) => {
  console.log("before upload", data)
  base_path.value = data.file.path
}
const handleClick = () => {
  uploadRef.value?.submit()
}
const readfile = async () => {
  v2.value = await readTextFile("README.md", {
    dir: base_path.value,
  }).catch((err) => {
    console.error(err)
  })
}


</script>
<template>
  <div>
    <n-input v-model:value="base_path" type="text" placeholder="Basic Input" />
    <n-button @click="readfile"> readme</n-button>
    <n-input v-model:value="v2" type="text" placeholder="read me" />
    <n-upload
      ref="upload"
      @before-upload="handleChange"
      multiple
      directory-dnd
      :default-upload="false"
      action="/"
      :max="1"
    >
      <n-upload-dragger>
        <div style="margin-bottom: 12px">
          <n-icon size="48" :depth="3">
            <!--            <archive-icon/>-->
          </n-icon>
        </div>
        <n-text style="font-size: 16px">
          drag dir animatediff-cli-prompt-travel to this area to config
        </n-text>
      </n-upload-dragger>
    </n-upload>

    <n-space>
      <n-button ghost>
        Default
      </n-button>
      <n-button type="primary" ghost>
        Primary
      </n-button>
      <n-button type="info" ghost>
        Info
      </n-button>
      <n-button type="success" ghost>
        Success
      </n-button>
      <n-button type="warning" ghost>
        Warning
      </n-button>
      <n-button type="error" ghost>
        Error
      </n-button>
    </n-space>
  </div>
</template>
