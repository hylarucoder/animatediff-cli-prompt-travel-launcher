<template>
  <n-form-item :path="path" :required="required" class="space-x-2">
    <template #label>
      <n-popover placement="bottom-start" trigger="hover">
        <template #trigger>
          <span class="i-mdi-ice-cream h-[18px] w-[18px]" />
        </template>
        <div class="text-sm">{{ labelHint }}</div>
      </n-popover>
      <span>{{ label }}</span>
    </template>
    <slot />
  </n-form-item>
</template>
<script setup lang="ts">
import { NFormItem, NInput, NPopover } from "naive-ui"

defineProps({
  label: {
    type: String,
    required: true,
  },
  labelHint: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
})
</script>
