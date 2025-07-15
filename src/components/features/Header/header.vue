<template>
  <header class="header">
    <div class="header-name header-section">
      <p class="header-name__text">
        Sergey Timoshenko
      </p>
    </div>

    <div class="header-nav">
      <NuxtLink class="header-section" :class="activeItem === 'hello' ? 'active' : 'blur'" @click="setActiveItem('hello')">
        _hello
      </NuxtLink>
      <NuxtLink class="header-section" :class="activeItem === 'about' ? 'active' : 'blur'" @click="setActiveItem('about')">
        _about-me
      </NuxtLink>
      <NuxtLink class="header-section" :class="activeItem === 'projects' ? 'active' : 'blur'" @click="setActiveItem('projects')">
        _projects
      </NuxtLink>
    </div>

    <NuxtLink class="header-section header-section__last" :class="activeItem === 'contact' ? 'active' : 'blur'" @click="setActiveItem('contact')">
      _contact-me
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
const activeItem = ref('hello')

const setActiveItem = (item: string) => {
  activeItem.value = item
}
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid var(--stroke-color);
  height: 56px;
  display: flex;
  align-items: center;
  &-nav {
    display: flex;
    flex-grow: 1;
    height: 100%;
  }
  &-section {
    border-right: 1px solid var(--stroke-color);
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 32px;
    transition: 0.4s;
    cursor: pointer;
    &__last {
      border-left: 1px solid var(--stroke-color);
      border-right: none;
    }
  }
  &-name {
    padding-left: 24px;
    width: 300px;
    &__text {
      width: fit-content;
      color: var(--stroke-color);
    }
  }
}

.active {
  color: var(--heading-color);
  box-shadow: inset 0 -3px 0 var(--primary-bg-color);
}

.blur {
  color: var(--foreground-color);
}
</style>