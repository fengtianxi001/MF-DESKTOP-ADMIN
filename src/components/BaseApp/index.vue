<template>
  <div class="base-desktop">
    <draggable v-model="desktop" item-key="id" class="base-widgets">
      <template #item="{ element }">
        <component :is="widgets[element.name]" :data="element.data" />
      </template>
    </draggable>
    <draggable v-model="apps" item-key="id" class="base-apps">
      <template #item="{ element }">
        <widgets.WidgetApp :data="element" />
      </template>
    </draggable>
  </div>
</template>
<script setup lang="ts">
import { desktop } from '@/stores/desktop'
import { apps } from '@/stores/apps'
import widgets from '@/components/BaseWidgets'
import draggable from 'vuedraggable'
</script>
<style lang="scss" scoped>
.base-desktop {
  display: flex;
  width: 80vw;
  height: calc(100vh - 60px - 300px);
  padding: 4px;
  margin: 0 auto;
  overflow: hidden;
  user-select: none;

  .base-widgets {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(auto-fill, 48px);
    grid-template-columns: repeat(auto-fill, 48px);
    grid-auto-flow: dense;
    grid-gap: 24px;
    justify-content: center;
    width: 100%;
  }

  .base-apps {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(auto-fill, 48px);
    grid-template-columns: repeat(auto-fill, 48px);
    grid-auto-flow: dense;
    grid-gap: 24px;
    justify-content: center;
    width: 100%;
  }
}
</style>
