<template>
  <Upload
    v-model:file-list="fileList"
    class="image-uploader"
    :custom-request="customRequest"
    :limit="limitNumber"
    :on-before-remove="onBeforeRemove"
    :image-preview="false"
    :show-preview-button="false"
    @before-upload="onBeforeUpload"
  />
</template>
<script setup lang="ts">
import { Upload, type RequestOption, Message } from '@arco-design/web-vue'
import { isArray, isNil, size } from 'lodash'
import { ref, watch } from 'vue'
import { Form, FormItem, useFormItem } from '@arco-design/web-vue'

interface PropsType {
  limitNumber?: number
  limitSize?: number
  list: any
  modelValue: any
  server: (params: any) => Promise<any>
}

const props = withDefaults(defineProps<PropsType>(), {
  list: [],
  server: () => Promise.resolve(),
  limitNumber: 1,
  limitSize: 1024 * 1024 * 10,
})
const emit = defineEmits(['update:modelValue'])
const { eventHandlers } = useFormItem()

const fileList = ref<any[]>([])
const customRequest = (option: RequestOption) => {
  const { fileItem, onSuccess } = option
  const formData = new FormData()
  if (fileItem.file instanceof File) {
    formData.append('file', fileItem.file)
    props.server(formData).then((res) => {
      onSuccess(res)
      if (props.limitNumber > 1) {
        if (isArray(props.modelValue)) {
          emit('update:modelValue', [...props.modelValue, res])
        } else {
          emit('update:modelValue', [res])
        }
      } else {
        emit('update:modelValue', res)
      }
      eventHandlers.value?.onChange?.()
    })
  }
  return {
    abort() {
      console.log('upload progress is aborted.')
    },
  }
}
const onBeforeRemove = (fileItem: any) => {
  if (props.limitNumber > 1) {
    const filter = props.modelValue.filter(
      (item: any) => item !== fileItem.response
    )
    emit('update:modelValue', [...filter])
  } else {
    emit('update:modelValue', null)
  }
  return Promise.resolve(true)
}

const onBeforeUpload = (file: any) => {
  if (size(file.name) >= 99) {
    Message.error('文件名过长')
    return false
  }
  if (file.size > 1024 * 1024 * 10) {
    Message.error('文件大小不能超过10M')
    return false
  }
  return true
}

watch(
  () => props.list,
  (list) => {
    if (isArray(list)) {
      fileList.value = list.map((item) => ({
        uid: item.id,
        name: item.fileOriginName,
        status: 'done',
        url: item.domainUrl,
        response: item.id,
      }))
    } else if (!isNil(list)) {
      fileList.value = [
        {
          uid: list.id,
          name: list.fileOriginName,
          status: 'done',
          url: list.domainUrl,
          response: list.id,
        },
      ]
    } else {
      fileList.value = []
    }
  },
  {
    immediate: true,
    deep: true,
  }
)
</script>
