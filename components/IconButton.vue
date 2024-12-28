<script lang="ts" setup>
const { to: destination } = defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink :to="destination" target="_blank">
    <div :class="$attrs.class" class="p-2 font-semibold rounded-lg" />
  </NuxtLink>
</template>
