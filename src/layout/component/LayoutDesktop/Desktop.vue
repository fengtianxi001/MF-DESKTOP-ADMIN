<template>
  <div class="layout-dekstop">
    <WidgetClock />
    <div class="desktop-main">
      <Draggable v-model="widgetStore" item-key="id" class="desktop-main-widgets">
        <template #item="{ element }">
          <component :is="widgets[element.name]" :data="element.data" />
        </template>
      </Draggable>
      <Draggable v-model="appStore" item-key="id" class="desktop-main-apps">
        <template #item="{ element }">
          <widgets.WidgetApp :data="element" />
        </template>
      </Draggable>
    </div>
  </div>
</template>
<script setup lang="ts">
import Draggable from 'vuedraggable'
import WidgetClock from '@/layout/widgets/WidgetClock/index.vue'
import { widgetStore } from '@/layout/store/widgets'
import { appStore } from '@/layout/store/apps'
import { widgets } from '@/layout/widgets'
</script>
<style lang="scss" scoped>
$widget-row-unit: 200px;
$widget-column-unit: 200px;
$app-row-unit: 50px;
$app-column-unit: 50px;

.layout-dekstop {
  flex: 1;
  width: 100vw;

  .desktop-main {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 40% 60%;
    width: 100vw;
    height: calc(100vh - 400px);
    padding: 0 20px;

    .desktop-main-widgets {
      display: grid;
      grid-template-rows: repeat(auto-fill, $widget-row-unit);
      grid-template-columns: repeat(auto-fill, $widget-column-unit);
      grid-auto-flow: dense;
      grid-gap: 24px;
      justify-content: center;
      width: 100%;
    }

    .desktop-main-apps {
      display: grid;
      grid-template-rows: repeat(auto-fill, $app-row-unit);
      grid-template-columns: repeat(auto-fill, $app-column-unit);
      grid-auto-flow: dense;
      grid-gap: 24px;
      justify-content: center;
      width: 100%;
    }
  }
}
</style>
@/layout/store/widgets
