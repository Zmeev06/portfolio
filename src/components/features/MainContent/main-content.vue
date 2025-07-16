<template>
  <div class="main">
    <div class="main-top">
      <p class="main-top__top_text">
        Hi all. I am
      </p>
      <h1 class="main-top__title">
        Sergey<br>Timoshenko
      </h1>
      <h4 class="main-top__bottom_text">
        > Front-end developer
      </h4>
    </div>
    <div class="main-bottom">
      <p class="main-bottom__text">
        // complete the game to continue
      </p>
      <p class="main-bottom__text">
        // find my profile on Github:
      </p>
      <p class="main-bottom__git">
        <span class="main-bottom__const">const</span> <span class="main-bottom__variable">githubLink</span> = <a href="https://github.com/Zmeev06" target="_blank" class="main-bottom__link">“https://github.com/Zmeev06”</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  gap: 75px;
  align-items: flex-start;
  justify-content: flex-start;
  &-top {
    width: 100%;
    &__top_text {
      color: var(--foreground-color);
      font-size: 18px;
    }
    &__title {
      color: var(--heading-color);
      font-size: 60px;
    }
    &__bottom_text {
      color: var(--indigo-color);
      font-size: 30px;
    }
  }
  &-bottom {
    &__text {
      color: var(--foreground-color);
    }
    &__git {
      color: var(--heading-color);
    }
    &__const {
      color: var(--indigo-color);
    }
    &__variable {
      color: var(--teal-color);
    }
    &__link {
      color: var(--link-color);
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>