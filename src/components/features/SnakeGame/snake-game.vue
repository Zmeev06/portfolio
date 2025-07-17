<template>
  <div class="snake">
    <img alt="bolt" :src="boltDownLeft" class="snake-bolt snake-bolt-down_left">
    <img alt="bolt" :src="boltDownRight" class="snake-bolt snake-bolt-down_right">
    <img alt="bolt" :src="boltUpLeft" class="snake-bolt snake-bolt-up_left">
    <img alt="bolt" :src="boltUpRight" class="snake-bolt snake-bolt-up_right">
    <img alt="gradient" :src="blue" class="snake-gradient snake-gradient_blue">
    <img alt="gradient" :src="green" class="snake-gradient snake-gradient_green">
    <Game />
  </div>
</template>

<script setup lang="ts">
import boltDownLeft from '~/src/assets/img/bolt-down-left.png'
import boltUpLeft from '~/src/assets/img/bolt-up-left.png'
import boltDownRight from '~/src/assets/img/bolt-down-right.png'
import boltUpRight from '~/src/assets/img/bolt-up-right.png'
import blue from '~/src/assets/img/Blue.png'
import green from '~/src/assets/img/Green.png'
import Game from '~/src/components/shared/SnakeGame/Game.vue'
</script>

<style scoped lang="scss">
.snake {
  background: linear-gradient(150deg, rgba(23, 85, 83, 1) 0%, rgba(67, 217, 173, 0.13) 50%, rgba(67, 217, 173, 0) 100%);
  border: 1px solid var(--stroke-color);
  border-radius: 8px;
  width: 506px;
  height: 470px;
  background-size: cover;
  -webkit-box-shadow: 0px 3px 0px 0px rgba(255, 255, 255, 0.2) inset;
  -moz-box-shadow: 0px 3px 0px 0px rgba(255, 255, 255, 0.2) inset;
  box-shadow: 0px 3px 0px 0px rgba(255, 255, 255, 0.2) inset;
  position: relative;
  padding: 32px;
  &-bolt {
    position: absolute;
    &-down_left {
      bottom: 12px;
      left: 12px;
    }
    &-down_right {
      bottom: 12px;
      right: 12px;
    }
    &-up_left {
      top: 12px;
      left: 12px;
    }
    &-up_right {
      top: 12px;
      right: 12px;
    }
  }
  &-gradient {
    position: absolute;
    &_blue {
      bottom: -100px;
      right: -150px;
      z-index: -1;
    }
    &_green {
      top: -140px;
      left: -220px;
      z-index: -1;
    }
  }
  &-game {
    width: 50%;
    height: 100%;
    background: var(--slate-color);
    border-radius: 8px;
    box-shadow: 0 5px 10px 2px rgba(2, 18, 27, 0.71) inset;
    position: relative;
  }
  &-point {
    position: absolute;
    top: 50px;
    left: 40%;
    transform: translateX(-50%);
  }
}
</style>