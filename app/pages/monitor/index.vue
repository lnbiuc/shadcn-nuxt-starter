<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup
    id="vertical-demo-group-1"
    direction="vertical"
    class="min-h-[calc(100vh-90px)] w-full border rounded-lg"
  >
    <ResizablePanel :default-size="75" :min-size="10">
      <div class="h-full flex items-center justify-center p-6">
        <span class="font-semibold">main</span>
      </div>
    </ResizablePanel>
    <ResizableHandle id="vertical-demo-handle-1" with-handle />
    <ResizablePanel :default-size="25" :min-size="10">
      <ResizablePanelGroup
        direction="horizontal"
        class="h-full w-full border rounded-lg"
      >
        <ResizablePanel :default-size="25" :min-size="5">
          <div class="h-full flex items-center justify-center p-6">
            <span class="font-semibold">1</span>
          </div>
        </ResizablePanel>
        <ResizableHandle with-handle />
        <ResizablePanel :default-size="25" :min-size="5">
          <div class="h-full flex items-center justify-center p-6">
            <span class="font-semibold">2</span>
          </div>
        </ResizablePanel>
        <ResizableHandle with-handle />
        <ResizablePanel :default-size="25" :min-size="5">
          <div class="h-full flex items-center justify-center p-6">
            <span class="font-semibold">3</span>
          </div>
        </ResizablePanel>
        <ResizableHandle with-handle />
        <ResizablePanel :default-size="25" :min-size="5">
          <div class="h-full flex items-center justify-center p-6">
            <span class="font-semibold">4</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>
