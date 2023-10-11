<template>
  <transition name="custom-transition" leave-active-class="animate__animated animate__zoomOut">
    <div
      v-if="visible"
      v-show="show"
      class="base-viewer animate__animated animate__zoomIn"
      ref="viewer"
      :style="style"
      @click.stop="topApp(app)"
    >
      <template v-if="app.window.resizable !== false">
        <div class="viewer-handle viewer-handle-top" ref="resizeHandleTop"></div>
        <div class="viewer-handle viewer-handle-right" ref="resizeHandleRight"></div>
        <div class="viewer-handle viewer-handle-bottom" ref="resizeHandleBottom"></div>
        <div class="viewer-handle viewer-handle-left" ref="resizeHandleLeft"></div>
        <div class="viewer-handle viewer-handle-top-left" ref="resizeHandleTopLeft"></div>
        <div class="viewer-handle viewer-handle-top-right" ref="resizeHandleTopRight"></div>
        <div class="viewer-handle viewer-handle-bottom-right" ref="resizeHandleBottomRight"></div>
        <div class="viewer-handle viewer-handle-bottom-left" ref="resizeHandleBottomLeft"></div>
      </template>
      <div class="viewer-header" ref="dragHandle" @dblclick="fullscreenApp(app)">
        <BaseAppIcon class="header-icon" :size="20" :name="app.iconName" :color="app.iconColor" />
        <span class="header-name">{{ app.name }}</span>
        <span
          v-show="app.window.minimizable !== false"
          class="iconfont icon-minus"
          @click.stop="minusApp(app)"
        ></span>
        <span
          v-show="app.window.maximizable !== false"
          class="iconfont icon-expend"
          @click="fullscreenApp(app)"
        ></span>
        <span class="iconfont icon-close" @click="closeApp(app)"></span>
      </div>
      <div class="viewer-content">
        <AsyncComp />
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { useViewer } from './hooks/useViewer'
import { computed, ref, Transition, defineAsyncComponent } from 'vue'
// import { closeApp, topApp, minusApp, fullscreenApp } from '../../layout/store/apps'
import BaseAppIcon from '@/components/BaseAppIcon/index.vue'

interface PropsType {
  app: AppType
}

const props = defineProps<PropsType>()

const zindex = ref(0)
const show = ref(true)
const visible = ref(true)

const AsyncComp = defineAsyncComponent(() => import(props.app.src))

const style = computed(() => {
  const appWindow = props.app.window
  const width = appWindow.width ?? 800
  const height = appWindow.height || 'auto'
  const top = height === 'auto' ? 100 : (window.innerHeight - height) / 2
  const left = appWindow.left ?? (window.innerWidth - width) / 2
  return {
    width: `${width}px`,
    height: height ? `${height}px` : 'auto',
    top: `${top}px`,
    left: `${left}px`,
  }
})

const {
  viewer,
  dragHandle,
  resizeHandleTop,
  resizeHandleRight,
  resizeHandleBottom,
  resizeHandleLeft,
  resizeHandleTopLeft,
  resizeHandleTopRight,
  resizeHandleBottomRight,
  resizeHandleBottomLeft,
} = useViewer()

defineExpose({
  zindex,
  show,
  visible,
})
</script>
<style lang="scss" scoped>
$z-index: v-bind(zindex);

.base-viewer {
  position: absolute;
  top: 100px;
  left: 100px;
  z-index: $z-index;
  color: var(--color-text-2);
  background-color: var(--color-bg-2);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  box-shadow: 3px 3px 20px 3px #000000a0;

  // transition: all 0.1s ease-in-out;
  animation-duration: 0.5s;

  .viewer-header {
    position: sticky;
    top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 38px;
    padding: 0 0 0 9px;
    font-weight: bold;
    background-color: var(--color-bg-2);
    border-bottom: 1px solid var(--color-border);

    .header-icon {
      width: 22px;
      height: 22px;
      margin-right: 9px;
    }

    .header-name {
      flex: 1;
      font-size: 15px;
    }

    .iconfont {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 100%;
      font-size: 13px;
      color: var(--color-text-2);
      cursor: pointer;

      &:hover {
        background-color: rgb(var(--gray-1));
      }
    }
  }

  .viewer-content {
    height: calc(100% - 38px);
  }

  .viewer-handle {
    position: absolute;
    z-index: 9999;
  }

  .viewer-handle-top {
    top: 0;
    left: 7px;
    width: calc(100% - 14px);
    height: 7px;
    cursor: ns-resize;
  }

  .viewer-handle-right {
    top: 7px;
    right: 0;
    width: 7px;
    height: calc(100% - 14px);
    cursor: ew-resize;
  }

  .viewer-handle-bottom {
    bottom: 0;
    left: 7px;
    width: calc(100% - 14px);
    height: 7px;
    cursor: ns-resize;
  }

  .viewer-handle-left {
    top: 7px;
    left: 0;
    width: 7px;
    height: calc(100% - 14px);
    cursor: ew-resize;
  }

  .viewer-handle-top-left {
    top: 0;
    left: 0;
    width: 7px;
    height: 7px;
    cursor: nwse-resize;
  }

  .viewer-handle-top-right {
    top: 0;
    right: 0;
    width: 7px;
    height: 7px;
    cursor: nesw-resize;
  }

  .viewer-handle-bottom-right {
    right: 0;
    bottom: 0;
    width: 7px;
    height: 7px;
    cursor: nwse-resize;
  }

  .viewer-handle-bottom-left {
    bottom: 0;
    left: 0;
    width: 7px;
    height: 7px;
    cursor: nesw-resize;
  }
}

.custom-transition-enter-active {
  animation-duration: 0.5s;
}

.custom-transition-leave-active {
  animation-duration: 0.5s;
}
</style>
