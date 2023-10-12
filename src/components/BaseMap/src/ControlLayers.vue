<template>
  <ControlPanel title="图层控制" icon="fa-solid fa-layer-group">
    <div class="control-layers">
      <Checkbox
        v-for="(value, key) in bmap.groups"
        :default-checked="true"
        @change="(visible) => value.setVisible(visible)"
      >
        <span> {{ key }}</span>
      </Checkbox>
    </div>
  </ControlPanel>
</template>
<script setup lang="ts">
import { Checkbox } from '@arco-design/web-vue'
import { inject } from 'vue'
import ControlPanel from './ControlPanel.vue'

const bmap: any = inject('bmap')
</script>
<style lang="scss">
.control-layers {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  grid-gap: 6px;

  .arco-checkbox-label {
    font-size: 13px;
  }
}
</style>
