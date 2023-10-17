<template>
  <div class="w-full h-full">
    <div>
      <a-button @click="selectDialog">Select Directory</a-button>
      <p>{{ saveImagePath }}</p>

    </div>
    <div class="grid gap-5 grid-cols-2 justify-center">
      <div
          class="w-[600px] h-[500px]"
      >
        <a-image
            :width="500"
            :src="src"
        />
        <p>current</p>
        <a-button @click="readClipboard">read clipboard</a-button>
        <a-button @click="saveImageToPath">save clipboard</a-button>
      </div>
      <div
          class="w-[600px] h-[500px]"
      >
        <a-image
            :width="500"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <p>last</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { clipboard, nativeImage } from "electron"
import fs from "fs"
import { resizeAndSaveImage } from "~/utils/saver"

const src = ref("")
const saveImagePath = ref("/Users/twocucao/Workspace/01-Code/projects-aigc/simpleaiart-images")

const readClipboard = () => {
  const buffer = readImageFromClipboard()
  if (!buffer) {
    return null
  }
  const blob = new Blob([buffer], { type: "image/png" })
  const reader = new FileReader()
  reader.onload = function(e) {
    src.value = e.target.result
  }
  reader.readAsDataURL(blob)
}

const isImage = (s: string) => {
  const path = s.toLowerCase()
  return path.endsWith(".png") || path.endsWith(".jpg") || path.endsWith(".jpeg") || path.endsWith(".gif") || path.endsWith(".bmp")
}

const readImageFromClipboard = () => {
  let imageFilePath = clipboard.read("public.file-url")
  if (!imageFilePath) {
    const a = clipboard.readImage()
    if (a.isEmpty()) {
      return null
    }
    return a.toPNG()
  }
  if (!isImage(imageFilePath)) {
    return null
  }
  const image = nativeImage.createFromPath(imageFilePath.replace("file://", ""))
  return image.toPNG()
}

const saveImageToPath = () => {
  // Remove header from base64 image
  const buffer = readImageFromClipboard()
  if (!buffer) {
    return null
  }
  resizeAndSaveImage(buffer, saveImagePath.value + "/static")
}


const selectDialog = () => {
  // dialog.showOpenDialog({
  //   properties: ["openDirectory"],
  // }).then(result => {
  //   if (!result.canceled) {
  //     saveImagePath.value = result.filePaths[0]
  //   }
  // }).catch(err => {
  //   console.log(err)
  // })
}

</script>
