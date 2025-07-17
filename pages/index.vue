<template>
  <div class="main">
    <MainContent />
    <SnakeGame />
  </div>
</template>

<script setup lang="ts">

import MainContent from '~/src/components/features/MainContent/main-content.vue'
import SnakeGame from '~/src/components/features/SnakeGame/snake-game.vue'
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 146px;
}
</style>