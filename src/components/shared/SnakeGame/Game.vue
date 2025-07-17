<template>
  <div class="game">
    <div class="game-field">
      <Point class="game-point" animation="true" />
    </div>
    <div>
      <div class="game-keyboard">
        <div>
          <p class="game-text">
            // use keyboard
          </p>
          <p class="game-text">
            // arrows to play
          </p>
        </div>
        <img alt="buttons" :src="buttons" class="game-buttons">
      </div>
      <div class="game-food">
        <p class="game-text">
          // food left
        </p>
        <div class="game-food-points">
          <Point
            v-for="(_, index) in Array(foodLeft)"
            :key="index"
            class="snake-food__point"
            animation="false"
          />
        </div>
      </div>
      <button class="game-skip">
        skip
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import buttons from '~/src/assets/img/buttons.png'
import Point from '~/src/components/core/SnakeGame/Point/point.vue'

const foodLeft = ref(10)
</script>

<style scoped lang="scss">
.game {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  &-field {
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
  &-text {
    color: var(--slate-color-50);
    font-size: 14px;
  }
  &-keyboard {
    background: var(--slate-color);
    border-radius: 8px;
    box-shadow: 0 5px 10px 2px rgba(2, 18, 27, 0.71) inset;
    width: 180px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
  }
  &-food {
    margin-top: 24px;
    width: 180px;
    &-points {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 136px;
      gap: 8px;
      margin: 8px auto 0;
    }
    &__point {
      width: 20px;
    }
  }
  &-skip {
    width: 58px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid var(--slate-color-50);
    color: var(--slate-color-50);
    position: absolute;
    bottom: 0;
    right: 0;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>