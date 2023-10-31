<script setup lang="ts">
import {
  NConfigProvider,
  NButton,
  NCode,
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

const adcliPath = ref("/Users/twocucao/Workspace/01-Code/projects-aigc/animatediff-cli-prompt-travel")
const v2 = ref("")
const handleChange = (data) => {
  console.log("before upload", data)
  adcliPath.value = data.file.file.path
}
const handleClick = () => {
  uploadRef.value?.submit()
}
const readfile = async () => {
  const a = await $fetch("http://192.168.2.113:7860/api/status")
  console.log(a)
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

const install = `
git clone https://github.com/s9roll7/animatediff-cli-prompt-travel.git
cd animatediff-cli-prompt-travel
py -3.10 -m venv venv
venv\\Scripts\\activate.bat
set PYTHONUTF8=1
python -m pip install --upgrade pip
# Torch installation must be modified to suit the environment. (https://pytorch.org/get-started/previous-versions/)
python -m pip install torch==2.0.1+cu118 torchvision==0.15.2+cu118 torchaudio==2.0.2 --index-url https://download.pytorch.org/whl/cu118
python -m pip install -e .
python -m pip install xformers

# If you want to use the 'stylize' command, you will also need
python -m pip install -e .[stylize]

# If you want to use use dwpose as a preprocessor for controlnet_openpose, you will also need
python -m pip install -e .[dwpose]
# (DWPose is a more powerful version of Openpose)

# If you want to use the 'stylize create-mask' and 'stylize composite' command, you will also need
python -m pip install -e .[stylize_mask]
`
</script>
<template>
  <div class="mx-5 my-5 overflow-y-scroll">
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
      </div>
      <div class="flex space-x-2">
        <v-form-item label="Project Name" label-hint="project name" path="user.name">
          <n-input v-model:value="formValue.name" placeholder="project-path" />
        </v-form-item>
      </div>
      <p>测试</p>

      <div>
        <n-code :code="install" language="markdown" />
      </div>
    </n-form>
    <n-button @click="readfile"> Refresh</n-button>
  </div>
</template>
