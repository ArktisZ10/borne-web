<script lang="ts" setup>
const { icon } = defineProps<{
  icon?: string // Optional icon to display on the button, as specified as UnoCSS icon classes
}>()
</script>

<template>
  <button>
    <div
      v-if="icon"
      :class="[icon]"
      class="my-auto mr-2"
    />
    <slot />
  </button>
</template>
