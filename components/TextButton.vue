<script lang="ts" setup>
const { icon } = defineProps<{
  icon?: string // Optional icon to display on the button, as specified as UnoCSS icon classes
}>()
</script>

<template>
  <button class="py-2 px-4 font-semibold rounded-lg shadow-md dark:shadow-lg flex">
    <div
      v-if="icon"
      :class="[icon]"
      class="my-auto mr-2"
    />
    <slot />
  </button>
</template>
