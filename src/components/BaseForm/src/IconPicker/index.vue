<template>
  <Dropdown position="bl" :popup-max-height="500">
    <IconPickerTrigger v-model="dataSource" :placeholder="placeholder" />
    <template #content>
      <IconPickerDropdown v-model="dataSource" @confirm="onconfirm" />
    </template>
  </Dropdown>
</template>
<script setup lang="ts">
import { Dropdown } from '@arco-design/web-vue'
import { computed } from 'vue'
import IconPickerTrigger from './widgets/IconPickerTrigger.vue'
import IconPickerDropdown from './widgets/IconPickerDropdown.vue'

interface PropsType {
  placeholder?: string
  modelValue?: any
}
const props = defineProps<PropsType>()
const emit = defineEmits(['update:modelValue'])
const dataSource = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const onconfirm = (icon: any) => {
  dataSource.value = icon
}
</script>
