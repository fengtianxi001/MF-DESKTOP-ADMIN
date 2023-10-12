<template>
  <ControlPanel title="地图参数" icon="fa-solid fa-layer-group">
    <ul class="control-params">
      <li>
        <Tag>纬度:</Tag>
        <span>{{ bmap.coordinate?.lat?.toFixed(8) }}</span>
      </li>
      <li>
        <Tag>经度:</Tag>
        <span>{{ bmap.coordinate?.lng?.toFixed(7) }}</span>
      </li>
      <!-- <li>
        <Tag>比例尺:</Tag>
        <span>{{ bmap.scale.value }}</span>
      </li> -->
    </ul>
  </ControlPanel>
</template>
<script setup lang="ts">
import { Tag } from '@arco-design/web-vue'
import { inject } from 'vue'
import ControlPanel from './ControlPanel.vue'

const bmap: any = inject('bmap')
console.log('bmap', bmap)
</script>
<style lang="scss" scoped>
.control-params {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  grid-gap: 6px;

  li {
    display: flex;
    grid-gap: 4px;
    align-items: center;
    font-size: 12px;
  }
}
</style>
