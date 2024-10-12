<script setup lang="ts">
import { GearIcon } from '@radix-icons/vue'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

const layouts = [
  {
    image: '/image/nasa-Q1p7bh3SHj8-unsplash.jpg',
    link: '/one-three'
  }

]
</script>

<template>
  <div class="my-4 flex flex-row items-center justify-between">
    <div>布局：</div>

    <Drawer>
      <DrawerTrigger as-child>
        <Button
          as="a"
          class="h-9 w-9"
          variant="ghost"
          size="icon"
        >
          <component :is="GearIcon" class="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div class="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle class="text-center">
              选择布局
            </DrawerTitle>
          </DrawerHeader>
          <div class="p-4 px-8 pb-0" />
          <DrawerFooter />
        </div>
      </DrawerContent>
    </Drawer>
  </div>

  <RouterView />
</template>
