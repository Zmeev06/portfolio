<template>
  <div class="point-main">
    <div class="middle point" :animation="props.animation" />
    <div class="small point" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  animation: string
}

const props = withDefaults(defineProps<Props>(), { animation: 'true' })
</script>

<style scoped lang="scss">
.point {
  background: var(--teal-color);
  border-radius: 100%;
  &-main {
    position: relative;
    width: 20px;
    height: 20px;
  }
}
.middle {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &[animation='true'] {
    animation: pulse-medium 1.5s infinite;
  }
}
.small {
  width: 8px;
  height: 8px;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes pulse-medium {
  0% {
    width: 0px;
    height: 0px;
    opacity: 0.2;
  }
  50% {
    width: 15px;
    height: 15px;
    opacity: 70%;
  }
  100% {
    width: 18px;
    height: 18px;
    opacity: 0;
  }
}
</style>