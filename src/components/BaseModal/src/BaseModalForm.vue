<template>
  <BaseModal :title="title" :onBeforeConfirm="onBeforeConfirm" :loading="loading">
    <BaseForm
      ref="form"
      v-model="dataSource"
      auto-label-width
      size="small"
      :configs="configs"
      :loading="loading"
    />
  </BaseModal>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import BaseModal from '@/components/BaseModal/src/BaseModal.vue'
import { BaseForm, useBaseForm } from '@/components/BaseForm'

interface PropsType {
  title: string
  loading: boolean
  modelValue: any
  configs: any
  onBeforeConfirm: any
}
const props = defineProps<PropsType>()
const emit = defineEmits(['update:modelValue'])

const dataSource = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const { form, validate } = useBaseForm()

defineExpose({
  form,
  validate,
})
</script>
