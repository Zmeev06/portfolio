<template>
  <div class="main">
    <div class="main-content">
      <Header />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

import Header from '~/src/components/features/Header/header.vue'
</script>

<style scoped lang="scss">
.main {
  padding: 70px;
  width: 100vw;
  height: 100vh;
}

.main-content {
  border: 1px solid var(--stroke-color);
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>