<script setup lang="ts">
import {
  NConfigProvider,
  NButton,
  NSpace,
  NA,
  NAffix,
  NAlert,
  NAnchor,
  NBackTop,
  NAutoComplete,
  NAvatar,
  NAvatarGroup,
  NAnchorLink,
  NBadge,
  NBlockquote,
  NBreadcrumb,
  NBreadcrumbItem,
  NButtonGroup,
  NCalendar,
  NCascader,
  NCheckbox,
  NCheckboxGroup,
  NCol,
  NCollapse,
  NCollapseItem,
  NCollapseTransition,
  NColorPicker,
  NCountdown,
  NCard,
  NCarousel,
  NCarouselItem,
  NDataTable,
  NDatePicker,
  NDescriptions,
  NDescriptionsItem,
  NDialog,
  NDialogProvider,
  NDivider,
  NDrawer,
  NDropdown,
  NDynamicInput,
  NDynamicTags,
  NForm,
  NEl,
  NEllipsis,
  NEmpty,
  NFormItem,
  NFormItemCol,
  NFormItemGi,
  NFormItemGridItem,
  NFormItemRow,
  NGi,
  NGlobalStyle,
  NGradientText,
  NGrid,
  NGridItem,
  NH1,
  NHr,
  NIcon,
  NIconWrapper,
  NImage,
  NImageGroup,
  NInput,
  NInputGroup,
  NInputGroupLabel,
  NInputNumber,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NLi,
  NList,
  NListItem,
  NLoadingBarProvider,
  NLog,
  NMention,
  NMenu,
  NMessageProvider,
  NNotificationProvider,
  NModal,
  NNumberAnimation,
  NOl,
  NP,
  NPageHeader,
  NPagination,
  NPopconfirm,
  NPopover,
  NPopselect,
  NProgress,
  NRadio,
  NRadioButton,
  NRadioGroup,
  NRate,
  NResult,
  NScrollbar,
  NSelect,
  NSkeleton,
  NSlider,
  NSpin,
  NStatistic,
  NStep,
  NSteps,
  NSwitch,
  NTabPane,
  NTable,
  NTag,
  NText,
  NTabs,
  NThing,
  NTime,
  NTooltip,
  NTimePicker,
  NTimeline,
  NTimelineItem,
  NTransfer,
  NTree,
  NTreeSelect,
  NUl,
  NUpload,
  NUploadDragger,
  NWatermark,
  NRow,
  DrawerPlacement,
} from "naive-ui"
import fs from "fs"

const uploadRef = ref(null)

const adcliPath = ref("/Users/twocucao/Workspace/01-Code/projects-aigc/animatediff-cli-prompt-travel-launcher")
const v2 = ref("")
const handleChange = (data) => {
  console.log("before upload", data)
  adcliPath.value = data.file.file.path
}
const handleClick = () => {
  uploadRef.value?.submit()
}
const readfile = async () => {
  // read readme nodejs
  v2.value = fs.readFileSync(adcliPath.value + "/README.md", {
    encoding: "utf8",
  })
}
const active = ref(false)
const placement = ref<DrawerPlacement>("right")
const activate = (place: DrawerPlacement) => {
  active.value = true
  placement.value = place
}

const formValue = ref({
  name: "t2i-sample",
  path: "C:\\AIGC\\App\\animatediff-cli-prompt-travel\\data\\models\\sd\\majicmixRealistic_v7.safetensors",
  vae_path: "",
  motion_module: "models\\motion-module\\mm_sd_v15_v2.ckpt",
  compile: false,
  scheduler: "k_dpmpp_sde",
  steps: 20,
  guidance_scale: 7,
  clip_skip: 2,
  head_prompt: "masterpiece, best quality,1girl,",
  prompt_map: {
    "0": "((walking:1.0)),",
    "32": "((walking:2.0)),",
    "64": "((full body:1.0)),",
    "96": "((upper close:1.0)),",
    "128": "((sit:1.0)),",
  },
  tail_prompt: "",
  n_prompt: [""],
  lora_map: {},
  user: {
    name: "",
    age: "",
  },
  phone: "",
  output: {
    format: "mp4",
    fps: 20,
    encode_param: {
      crf: 10,
    },
  },
})
const rules = ref({
  user: {
    name: {
      required: true,
      message: "Please input your name",
      trigger: "blur",
    },
    age: {
      required: true,
      message: "Please input your age",
      trigger: ["input", "blur"],
    },
  },
  phone: {
    required: true,
    message: "Please input your number",
    trigger: ["input"],
  },
})
const customValue = ref([
  {
    isCheck: true,
    num: 1,
    string: "A String",
  },
])
const images = ref<Array<{ src: string }>>([])

const uploadImage = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      images.value.push({ src: e.target?.result as string })
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = (index: number) => {
  images.value.splice(index, 1)
}
</script>
<template>
  <div class="mx-5 overflow-y-scroll">
    <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="small">
      <p>Global 检查全局配置 ffmpeg 等</p>
      <v-form-item label="animatediff cli path" label-hint="aaa" path="user.name" required class="space-x-2">
        <n-input v-model:value="adcliPath" type="text" placeholder="Basic Input" />
      </v-form-item>
      <p>General</p>
      <div class="grid grid-cols-2">
        <v-form-item label="Projects Path" label-hint="aaa" path="user.name" required class="space-x-2">
          <n-input v-model:value="formValue.user.name" placeholder="Input Name" />
        </v-form-item>
        <div>
          <p>Output</p>
          <v-form-item label="FPS" label-hint="aaa" path="user.name" required class="space-x-2">
            <n-input-number step="5" v-model:value="formValue.output.fps" placeholder="Input Name" />
          </v-form-item>
          <v-form-item label="Format" label-hint="aaa" path="user.name" required class="space-x-2">
            <n-input v-model:value="formValue.output.format" placeholder="Input Name" />
          </v-form-item>
        </div>
      </div>
      <div class="flex space-x-2">
        <v-form-item label="Project Name" label-hint="project name" path="user.name">
          <n-input v-model:value="formValue.name" placeholder="project-path" />
        </v-form-item>
      </div>
      <p>测试</p>
      <div class="flex flex-wrap space-x-2">
        <n-form-item label="Checkpoint" path="user.name">
          <n-input v-model:value="formValue.path" placeholder="Input Name" />
        </n-form-item>
        <n-form-item label="Lora" path="user.name">
          <n-input v-model:value="formValue.motion_module" placeholder="Input Name" />
        </n-form-item>
        <n-form-item label="MotionModule" path="user.name">
          <n-input v-model:value="formValue.motion_module" placeholder="Input Name" />
        </n-form-item>
        <n-form-item label="Motion Lora" path="user.name">
          <n-input v-model:value="formValue.motion_module" placeholder="Input Name" />
        </n-form-item>
        <n-form-item label="VAE" path="user.name">
          <n-input v-model:value="formValue.path" placeholder="Input Name" />
        </n-form-item>
        <n-form-item label="Scheduler" path="user.name">
          <n-input v-model:value="formValue.motion_module" placeholder="Input Name" />
        </n-form-item>
        <n-form-item label="Steps" path="user.name">
          <n-input-number step="5" v-model:value="formValue.steps" placeholder="Input Name" />
        </n-form-item>
        <n-form-item label="Guidance Scale" path="user.name">
          <n-input v-model:value="formValue.motion_module" placeholder="Input Name" />
        </n-form-item>
        <n-form-item label="Clip Skip" path="user.name">
          <n-input v-model:value="formValue.motion_module" placeholder="Input Name" />
        </n-form-item>
      </div>
      <div>
        <p>Prompt</p>
        <div class="flex space-x-5">
          <n-form-item label="Head Prompt" path="user.name">
            <n-input
              type="textarea"
              :resizable="false"
              maxlength="4"
              minlength="4"
              v-model:value="formValue.motion_module"
              placeholder="Input Name"
            />
          </n-form-item>
          <n-form-item label="Tail Prompt" path="user.name">
            <n-input
              type="textarea"
              :resizable="false"
              maxlength="4"
              minlength="4"
              v-model:value="formValue.motion_module"
              placeholder="Input Name"
            />
          </n-form-item>
          <n-form-item label="Negative Prompt" path="user.name">
            <n-input
              type="textarea"
              :resizable="false"
              maxlength="4"
              minlength="4"
              v-model:value="formValue.motion_module"
              placeholder="Input Name"
            />
          </n-form-item>
        </div>
      </div>
      <div>
        <p>Frames</p>
        <!--  Card Frame -->
        <div class="p-0">
          <!-- toolbar -->
          add frame
          <input type="file" @change="uploadImage" class="mb-4" />
          <div class="flex gap-4">
            <div v-for="(image, index) in images" :key="index" class="relative w-[100px] transition hover:bg-gray-100">
              <n-image :src="image.src" class="h-32 w-full object-cover" />
              <div class="absolute right-0 top-0 cursor-pointer bg-red-500 p-1 text-white" @click="removeImage(index)">X</div>
              <div class="absolute left-0 top-0 bg-black bg-opacity-60 p-1 text-white">
                {{ index + 1 }}
              </div>
              <div class="absolute bottom-0 left-0 bg-black bg-opacity-60 p-1 text-white">edit</div>
            </div>
          </div>
        </div>
        <n-form-item label="Prompt Map" path="user.name">
          <n-dynamic-input v-model:value="customValue">
            <template #create-button-default> Add whatever you want</template>
            <template #default="{ value }">
              <div style="display: flex; align-items: center; width: 100%">
                <n-checkbox v-model:checked="value.isCheck" style="margin-right: 12px" />
                <n-input-number v-model:value="value.num" style="margin-right: 12px; width: 160px" />
                <n-input v-model:value="value.string" type="text" />
              </div>
            </template>
          </n-dynamic-input>
        </n-form-item>
      </div>
    </n-form>
    <n-button @click="readfile"> readme</n-button>
    <n-input type="textarea" v-model:value="v2" placeholder="read me" />
    <n-upload ref="uploadRef" @before-upload="handleChange" multiple directory-dnd :default-upload="false" action="/" :max="1">
      <n-upload-dragger>
        <n-text style="font-size: 16px"> drag dir animatediff-cli-prompt-travel to this area to config</n-text>
      </n-upload-dragger>
    </n-upload>

    <n-space>
      <n-button ghost> Default</n-button>
      <n-button type="primary" ghost> Primary</n-button>
      <n-button type="info" ghost> Info</n-button>
      <n-button type="success" ghost> Success</n-button>
      <n-button type="warning" ghost> Warning</n-button>
      <n-button type="error" ghost> Error</n-button>
    </n-space>
    <n-button @click="activate('right')"> Right</n-button>
    <n-drawer v-model:show="active" :width="502" :placement="placement">
      <n-drawer-content title="Stoner"> Stoner is a 1965 novel by the American writer John Williams.</n-drawer-content>
    </n-drawer>
  </div>
</template>
