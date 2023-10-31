<script setup lang="ts">
import {
  NButton,
  NSpace,
  NH1,
  NH2,
  NH3,
  NCheckbox,
  NDrawer,
  NDynamicInput,
  NForm,
  NFormItem,
  NSwitch,
  NImage,
  NSelect,
  NDrawerContent,
  NInput,
  NInputNumber,
  NText,
  NUpload,
  NUploadDragger,
  DrawerPlacement,
} from "naive-ui"

const uploadRef = ref(null)

const v2 = ref("")
const checkedValue = ref("Simple")
const duration = ref(30)
const handleChange = (data) => {
  console.log("before upload", data)
}
const handleClick = () => {
  uploadRef.value?.submit()
}

const optionScheduler = ref(
  ["ddim", "dpmpp_2m", "k_dpmpp_2m", "k_dpmpp_sde", "k_dpmpp_2m_sde"].map((x) => {
    return {
      label: x,
      value: x,
    }
  }),
)

const loras = ref([])
const motion_loras = ref([])

const optionCheckpoints = ref([])
const optionLoRAs = ref([])
const optionMotionModule = ref([])
const optionMotionLora = ref([])
const loading = ref(true)

const initialLoad = async () => {
  loading.value = true
  const res = await $fetch("http://192.168.2.113:7860/api/status")
  optionCheckpoints.value = res.options.checkpoint.map((x) => {
    return {
      label: x.path,
      value: x.path,
      thumbnail: x.thumbnail,
    }
  })
  optionLoRAs.value = res.options.lora.map((x) => {
    return {
      label: x.path,
      value: x.path,
      thumbnail: x.thumbnail,
    }
  })
  optionMotionModule.value = res.options.motion_module.map((x) => {
    return {
      label: x.path,
      value: x.path,
      thumbnail: x.thumbnail,
    }
  })
  loading.value = false
}

onMounted(async () => {
  await initialLoad()
})

const refresh = async () => {
  // pull options from server
  await initialLoad()
}
const active = ref(false)
const placement = ref<DrawerPlacement>("right")
const activate = (place: DrawerPlacement) => {
  active.value = true
  placement.value = place
}

const form = ref({
  name: "t2i-sample",
  path: "majicmixRealistic_v7.safetensors",
  vae_path: "",
  motion_module: "mm_sd_v15_v2.ckpt",
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
  output: {
    format: "mp4",
    fps: 8,
    encode_param: {
      crf: 10,
    },
  },
})
const rules = ref({
  checkpoint: {
    required: true,
    message: "Please input your name",
  },
  user: {
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

const frames = ref<
  Array<{
    index: number
    prompt: string
    image: string
  }>
>([])

const addFrameByImage = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      frames.value.push({
        index: 0,
        prompt: "",
        image: e.target?.result as string,
      })
    }
    reader.readAsDataURL(file)
  }
}

const initFrames = () => {
  const iterates = (duration.value * form.value.output.fps) / 16
  for (let i = 0; i < iterates; i++) {
    frames.value.push({
      index: i * 16,
      prompt: "",
      image: "",
    })
  }
}

const removeImage = (index: number) => {
  frames.value.splice(index, 1)
}
</script>
<template>
  <div class="m-5 overflow-y-scroll">
    <n-form ref="formRef" :label-width="80" :model="form" :rules="rules">
      <n-h2>General</n-h2>
      <n-button @click="refresh">refresh</n-button>
      <div class="flex w-full">
        <v-form-item label="Project Name" label-hint="project name" required>
          <n-input v-model:value="form.name" placeholder="project-path" />
        </v-form-item>
        <div class="flex">
          <span>??</span>
          <v-form-item label="Duration (s)" label-hint="aaa" required class="w-[100px] space-x-2">
            <n-input-number step="1" v-model:value="duration" placeholder="Duration" />
          </v-form-item>
          <v-form-item label="FPS" label-hint="aaa" required class="w-[100px] space-x-2">
            <n-input-number step="2" v-model:value="form.output.fps" placeholder="In" />
          </v-form-item>
          <v-form-item label="Format" label-hint="aaa" required class="w-[100px] space-x-2">
            <n-input disabled v-model:value="form.output.format" placeholder="Format" />
          </v-form-item>
        </div>
      </div>
      <n-h2>基本参数</n-h2>
      <div class="flex flex-wrap space-x-2">
        <v-form-item label="Checkpoint" class="w-[300px]">
          <n-select v-model:value="form.path" :options="optionCheckpoints" placeholder="Load CheckPoint" />
        </v-form-item>
        <v-form-item label="Lora" class="w-[300px]">
          <n-select v-model:value="loras" :options="optionLoRAs" placeholder="Load LoRAs" />
        </v-form-item>
        <v-form-item label="Motion Module" class="w-[300px]">
          <n-select v-model:value="form.motion_module" :options="optionMotionModule" placeholder="Load Motion Module" />
        </v-form-item>
        <v-form-item label="Motion Lora" class="w-[300px]">
          <n-select v-model:value="motion_loras" :options="optionMotionLora" placeholder="Load Motion LoRA" />
        </v-form-item>
        <v-form-item label="VAE" class="w-[300px]">
          <n-input v-model:value="form.vae_path" placeholder="Load VAE" />
        </v-form-item>
      </div>
      <div class="flex flex-wrap space-x-2">
        <v-form-item label="Scheduler" class="w-[200px]">
          <n-select v-model:value="form.scheduler" :options="optionScheduler" placeholder="Pick A Scheduler" />
        </v-form-item>
        <v-form-item label="Steps" class="w-[100px]">
          <n-input-number step="20" v-model:value="form.steps" placeholder="Input Name" />
        </v-form-item>
        <v-form-item label="Guidance Scale" class="w-[100px]">
          <n-input-number v-model:value="form.guidance_scale" placeholder="Input Name" />
        </v-form-item>
        <v-form-item label="Clip Skip" class="w-[100px]">
          <n-input-number v-model:value="form.clip_skip" placeholder="Input Name" max="8" min="1" />
        </v-form-item>
      </div>
      <n-h2>Prompt</n-h2>
      <div>
        <div class="flex space-x-5">
          <v-form-item label="Head Prompt" class="w-[300px]">
            <n-input type="textarea" :resizable="false" maxlength="4" minlength="4" v-model:value="form.head_prompt" placeholder="Input Name" />
          </v-form-item>
          <v-form-item label="Tail Prompt" class="w-[300px]">
            <n-input type="textarea" :resizable="false" maxlength="4" minlength="4" v-model:value="form.tail_prompt" placeholder="Input Name" />
          </v-form-item>
          <v-form-item label="Negative Prompt" class="w-[300px]">
            <n-input type="textarea" :resizable="false" maxlength="4" minlength="4" v-model:value="form.n_prompt" placeholder="Input Name" />
          </v-form-item>
        </div>
      </div>
      <n-h2>Frame</n-h2>
      <div>
        <div class="p-0">
          <n-space>
            <n-button @click="initFrames">清理并占位 16 frame</n-button>
          </n-space>
          <input type="file" @change="addFrameByImage" class="mb-4" />
          <n-button @click="activate('right')"> add place holder by 16</n-button>
          <n-drawer v-model:show="active" :width="502" :placement="placement">
            <n-drawer-content title="Stoner"> Stoner is a 1965 novel by the American writer John Williams. </n-drawer-content>
          </n-drawer>
          <div class="flex w-full gap-4">
            <div v-for="(frame, index) in frames" :key="index" class="relative flex w-[100px] flex-wrap space-x-3 transition hover:bg-gray-100">
              <n-image :src="frame.image" class="h-32 w-full object-cover shadow" />
              <div class="absolute right-0 top-0 cursor-pointer bg-red-500 p-1 text-white" @click="removeImage(index)">X</div>
              <div class="absolute left-0 top-0 bg-black bg-opacity-60 p-1 text-white">
                {{ frame.index }}
              </div>
              <div class="absolute bottom-0 left-0 bg-black bg-opacity-60 p-1 text-white">edit</div>
            </div>
          </div>
        </div>
        <v-form-item label="Prompt Map">
          <n-dynamic-input v-model:value="frames">
            <template #create-button-default> Add whatever you want</template>
            <template #default="{ value }">
              <div class="flex">
                <n-input-number v-model:value="value.index" style="margin-right: 12px; width: 160px" />
                <n-input v-model:value="value.prompt" type="text" class="w-[300px]" />
<!--                <n-image :src="value.image" />-->
              </div>
            </template>
          </n-dynamic-input>
        </v-form-item>
      </div>
    </n-form>
    <n-input type="textarea" v-model:value="v2" placeholder="read me" />
    <n-upload ref="uploadRef" @before-upload="handleChange" multiple directory-dnd :default-upload="false" action="/" :max="1">
      <n-upload-dragger>
        <n-text style="font-size: 16px"> drag dir animatediff-cli-prompt-travel to this area to config</n-text>
      </n-upload-dragger>
    </n-upload>
    <v-timeline />
  </div>
</template>
