# BaseCard

> 继承 [@arco-design 的 Card 组件](https://arco.design/vue/component/card#API),
> 保留所有原生 API。

## 扩展属性

| 参数名  | 描述         | 类型      | 默认值  |
| ------- | ------------ | --------- | ------- |
| title   | 卡片标题     | `string`  | `-`     |
| loading | 是否为加载中 | `boolean` | `false` |
| empty   | 是否为空内容 | `boolean` | `-`     |

## 使用案例

```html
<template>
  <BaseCard title="一个普通的面板组件" :loading="loading" :empty="empty">
    <ul>
      <li v-for="item in dataSource" :key="dataSource">{{item}}</li>
    </ul>
  </BaseCard>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import { BaseCard } from '@/components/BaseCard'

  const dataSource = ref([])
  const loading = ref(false)
  const isEmpty = computed(() => dataSource.value.length === 0)
</script>
```
