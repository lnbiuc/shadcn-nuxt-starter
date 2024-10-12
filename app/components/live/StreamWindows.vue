<script lang="ts" setup>
import Player from 'xgplayer'
import { useElementSize, watchOnce } from '@vueuse/core'
import FlvPlugin from 'xgplayer-flv'
import 'xgplayer/dist/index.min.css'

const props = defineProps({
  url: {
    type: String,
    default: '',
    required: true,
  },
})

const videoPlayer = ref<HTMLElement | null>()

watchOnce(videoPlayer, () => {
  const { width } = useElementSize(videoPlayer)
  const height = width.value * 9 / 16
  if (FlvPlugin.isSupported()) {
    const player = new Player({
      id: 'mse',
      url: props.url,
      height: `${height}px`,
      width: `${width.value}px`,
      plugins: [FlvPlugin],
      flv: {
        targetLatency: 1, // 直播目标延迟
        maxLatency: 5, // 直播允许的最大延迟
        disconnectTime: 0, // 直播断流时间
      },
      isLive: true,
      autoplay: true,
      autoplayMuted: true,
    })
    console.warn(player)
  }
})
</script>

<template>
  <ClientOnly>
    <div id="mse" ref="videoPlayer" class="w-full" />
  </ClientOnly>
</template>
