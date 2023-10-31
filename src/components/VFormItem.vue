<script setup lang="ts">
import { NFormItem, NInput, NPopover } from "naive-ui"

defineProps({
  label: {
    type: String,
    required: true,
  },
  labelHint: {
    type: String,
    required: false,
    default: "",
  },
  path: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <n-form-item :path="path" :required="required" class="space-x-2">
    <template #label>
      <span class="n-form-item-label__text" v-if="labelHint">
        {{ label }}
      </span>
      <n-popover placement="top-start" trigger="hover" v-if="!labelHint">
        <template #trigger>
          <span class="n-form-item-label__text">
            {{ label }}
          </span>
        </template>
        <div class="text-sm">{{ labelHint }}</div>
      </n-popover>
    </template>
    <slot />
  </n-form-item>
</template>
