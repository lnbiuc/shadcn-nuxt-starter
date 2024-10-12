<script setup lang="ts">
import StreamWindows from '~/components/live/StreamWindows.vue'

const player = ref<HTMLElement | null>()
</script>

<template>
  <Card class="mt-4 w-full flex flex-col p-4">
    <StreamWindows ref="player" class="h-full w-full rounded-md" url="https://pull.vio.vin/live/live_2.flv" />
    <div class="mt-4 w-full flex flex-row justify-between">
      <Button class="mr-4 w-full">
        直播间_main
      </Button>
      <Button class="mr-4 w-full">
        直播间_1
      </Button>
      <Button class="mr-4 w-full">
        直播间_2
      </Button>
      <Button class="mr-4 w-full">
        直播间_3
      </Button>
      <Button class="w-full">
        直播间_4
      </Button>
    </div>
  </Card>
</template>
