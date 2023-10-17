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
  NRow, DrawerPlacement,
} from "naive-ui"
import fs from "fs"

const uploadRef = ref(null)

const base_path = ref("/Users/twocucao/Workspace/01-Code/projects-aigc/animatediff-cli-prompt-travel-launcher")
const v2 = ref("")
const handleChange = (data) => {
  console.log("before upload", data)
  base_path.value = data.file.file.path
}
const handleClick = () => {
  uploadRef.value?.submit()
}
const readfile = async () => {
  // read readme nodejs
  v2.value = fs.readFileSync(base_path.value + "/README.md", {
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
  user: {
    name: "",
    age: "",
  },
  phone: "",
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

</script>
<template>
  <div class="mx-5">
    <n-form
      ref="formRef"
      :label-width="80"
      :model="formValue"
      :rules="rules"
      size="small"
    >
      <div class="flex space-x-2">
        <n-form-item label="Projects Path" path="user.name">
          <n-input v-model:value="formValue.user.name" placeholder="Input Name" />
        </n-form-item>
        <n-form-item label="Project Path" path="user.name">
          <n-input v-model:value="formValue.user.name" placeholder="Input Name" />
        </n-form-item>
      </div>
      <div class="flex space-x-2">
        <n-form-item label="Project" path="user.name">
          <n-input v-model:value="formValue.user.name" placeholder="Input Name" />
        </n-form-item>
        <n-form-item label="Project Path" path="user.name">
          <n-input v-model:value="formValue.user.name" placeholder="Input Name" />
        </n-form-item>
      </div>

    </n-form>
    <n-input v-model:value="base_path" type="text" placeholder="Basic Input" />
    <n-button @click="readfile"> readme</n-button>
    <n-input
      type="textarea"
      v-model:value="v2"
      placeholder="read me"
    />
    <n-upload
      ref="uploadRef"
      @before-upload="handleChange"
      multiple
      directory-dnd
      :default-upload="false"
      action="/"
      :max="1"
    >
      <n-upload-dragger>
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
    <n-button @click="activate('right')">
      Right
    </n-button>
    <n-drawer v-model:show="active" :width="502" :placement="placement">
      <n-drawer-content title="Stoner">
        Stoner is a 1965 novel by the American writer John Williams.
      </n-drawer-content>
    </n-drawer>
  </div>
</template>
