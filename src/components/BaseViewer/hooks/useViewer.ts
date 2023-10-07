import { ref, onMounted, onUnmounted, reactive } from 'vue'

export function useViewer() {
  const viewer = ref<HTMLDivElement>()

  const resizeParams = {
    resizing: false,
    direction: '',
    start: [0, 0],
    size: [0, 0],
  }
  const dragParams = {
    start: [0, 0],
  }
  const dragHandle = ref<HTMLDivElement>()
  const resizeHandleTop = ref<HTMLDivElement>()
  const resizeHandleRight = ref<HTMLDivElement>()
  const resizeHandleBottom = ref<HTMLDivElement>()
  const resizeHandleLeft = ref<HTMLDivElement>()
  const resizeHandleTopLeft = ref<HTMLDivElement>()
  const resizeHandleTopRight = ref<HTMLDivElement>()
  const resizeHandleBottomRight = ref<HTMLDivElement>()
  const resizeHandleBottomLeft = ref<HTMLDivElement>()

  const onMouseDown = (event: MouseEvent, direction: string) => {
    event.preventDefault()
    resizeParams.direction = direction
    resizeParams.resizing = !!direction
    resizeParams.start[0] = event.clientX
    resizeParams.start[1] = event.clientY
    resizeParams.size[0] = viewer.value!.offsetWidth
    resizeParams.size[1] = viewer.value!.offsetHeight
    dragParams.start[0] = event.clientX - viewer.value!.offsetLeft
    dragParams.start[1] = event.clientY - viewer.value!.offsetTop
    document.addEventListener('mousemove', onMouseMove, false)
    document.addEventListener('mouseup', onMouseUp, false)
  }

  const onMouseMove = (event: MouseEvent) => {
    const { direction, start, size, resizing } = resizeParams
    if (resizing) {
      var deltaX = event.clientX - start[0]
      var deltaY = event.clientY - start[1]
      if (direction === 'top') {
        viewer.value!.style.height = size[1] - deltaY + 'px'
        viewer.value!.style.top = start[1] + deltaY + 'px'
      } else if (direction === 'bottom') {
        viewer.value!.style.height = size[1] + deltaY + 'px'
      } else if (direction === 'left') {
        viewer.value!.style.width = size[0] - deltaX + 'px'
        viewer.value!.style.left = start[0] + deltaX + 'px'
      } else if (direction === 'right') {
        viewer.value!.style.width = size[0] + deltaX + 'px'
      } else if (direction === 'top-left') {
        const deltaX = event.clientX - start[0]
        const deltaY = event.clientY - start[1]
        const newWidth = size[0] - deltaX
        const newHeight = size[1] - deltaY
        const newLeft = start[0] + deltaX
        const newTop = start[1] + deltaY

        viewer.value!.style.width = newWidth + 'px'
        viewer.value!.style.height = newHeight + 'px'
        viewer.value!.style.left = newLeft + 'px'
        viewer.value!.style.top = newTop + 'px'
      } else if (direction === 'top-right') {
        const deltaX = event.clientX - start[0]
        const deltaY = event.clientY - start[1]
        const newWidth = size[0] + deltaX
        const newHeight = size[1] - deltaY
        const newTop = start[1] + deltaY

        viewer.value!.style.width = newWidth + 'px'
        viewer.value!.style.height = newHeight + 'px'
        viewer.value!.style.top = newTop + 'px'
      } else if (direction === 'bottom-left') {
        const deltaX = event.clientX - start[0]
        const deltaY = event.clientY - start[1]
        const newWidth = size[0] - deltaX
        const newHeight = size[1] + deltaY
        const newLeft = start[0] + deltaX

        viewer.value!.style.width = newWidth + 'px'
        viewer.value!.style.height = newHeight + 'px'
        viewer.value!.style.left = newLeft + 'px'
      } else if (direction === 'bottom-right') {
        const deltaX = event.clientX - start[0]
        const deltaY = event.clientY - start[1]
        const newWidth = size[0] + deltaX
        const newHeight = size[1] + deltaY

        viewer.value!.style.width = newWidth + 'px'
        viewer.value!.style.height = newHeight + 'px'
      }
    } else {
      const [startX, startY] = dragParams.start
      const newLeft = event.clientX - startX
      const newTop = event.clientY - startY
      const containerWidth = viewer.value!.offsetWidth
      const containerHeight = viewer.value!.offsetHeight
      const maxWidth = window.innerWidth - containerWidth
      const maxHeight = window.innerHeight - containerHeight
      const clampedLeft = Math.max(0, Math.min(newLeft, maxWidth))
      const clampedTop = Math.max(0, Math.min(newTop, maxHeight))
      viewer.value!.style.left = `${clampedLeft}px`
      viewer.value!.style.top = `${clampedTop}px`
    }
  }

  const onMouseUp = () => {
    resizeParams.direction = ''
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  onMounted(() => {
    dragHandle.value?.addEventListener('mousedown', (e) => onMouseDown(e, ''))
    resizeHandleTop.value?.addEventListener('mousedown', (e) => onMouseDown(e, 'top'))
    resizeHandleRight.value?.addEventListener('mousedown', (e) => onMouseDown(e, 'right'))
    resizeHandleBottom.value?.addEventListener('mousedown', (e) => onMouseDown(e, 'bottom'))
    resizeHandleLeft.value?.addEventListener('mousedown', (e) => onMouseDown(e, 'left'))

    resizeHandleTopLeft.value?.addEventListener('mousedown', (e) => onMouseDown(e, 'top-left'))
    resizeHandleTopRight.value?.addEventListener('mousedown', (e) => onMouseDown(e, 'top-right'))
    resizeHandleBottomRight.value?.addEventListener('mousedown', (e) =>
      onMouseDown(e, 'bottom-right')
    )
    resizeHandleBottomLeft.value?.addEventListener('mousedown', (e) =>
      onMouseDown(e, 'bottom-left')
    )
  })
  return {
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
  }
}
