<template>
  <div id="fullpage-layout" class="min-h-screen flex flex-col bg-background font-sans">
    <TheHeader />
    <div class="flex-1 bg-background p-4">
      <slot />
    </div>
    <!-- <TheFooter /> -->
  </div>
</template>
