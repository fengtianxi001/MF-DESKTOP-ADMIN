import { ref } from 'vue'

export const systemStore = ref({
  wallpaper: '/background/1.webp',
  wallpapers: [
    '/background/1.webp',
    '/background/2.webp',
    '/background/3.webp',
    '/background/4.webp',
    '/background/5.webp',
    '/background/6.webp',
    '/background/7.webp',
    '/background/8.webp',
    '/background/9.webp',
    '/background/10.webp',
    '/background/11.webp',
    '/background/12.webp',
    '/background/13.webp',
    '/background/14.webp',
  ],
})

export const setSystemWallpaper = (src: string) => {
  systemStore.value.wallpaper = src
}
