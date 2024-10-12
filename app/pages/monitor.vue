<script setup lang="ts">
import { GearIcon } from '@radix-icons/vue'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

const layouts = [
  {
    image: '/image/nasa-Q1p7bh3SHj8-unsplash.jpg',
    link: '/monitor',
    name: 'Default',
  },
  {
    image: '/image/nasa-Q1p7bh3SHj8-unsplash.jpg',
    link: '/monitor/one-three',
    name: 'OneThree',
  },
  {
    image: '/image/nasa-Q1p7bh3SHj8-unsplash.jpg',
    link: '/monitor/drag-able',
    name: 'DragAble',
  },
]

const open = ref(false)
</script>

<template>
  <div class="my-4 flex flex-row items-center justify-between">
    <div>布局：</div>

    <Drawer v-model:open="open">
      <DrawerTrigger as-child>
        <Button
          as="a"
          class="h-9 w-9"
          variant="ghost"
          size="icon"
          @click="open = true"
        >
          <component :is="GearIcon" class="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div class="mx-auto">
          <DrawerHeader>
            <DrawerTitle class="text-center">
              选择布局
            </DrawerTitle>
            <DrawerDescription />
          </DrawerHeader>
          <div class="w-full flex flex-row items-center justify-around px-4">
            <div v-for="layout in layouts" :key="layout.link" class="m-2 flex flex-col items-center rounded p-4 hover:bg-violet-500" @click="$router.push(layout.link);open = false">
              <NuxtImg :src="layout.image" class="w-full rounded" />
              <div class="mt-4">
                {{ layout.name }}
              </div>
            </div>
          </div>
          <DrawerFooter />
        </div>
      </DrawerContent>
    </Drawer>
  </div>

  <RouterView />
</template>
