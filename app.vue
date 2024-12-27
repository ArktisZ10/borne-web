<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)

useHead({
  title: 'Börne.se',
  meta: [
    { name: 'description', content: 'Börnes Magasin' },
  ],
  bodyAttrs: {
    class: 'dark:bg-gray-800',
  },
})
</script>

<template>
  <main class="py-20 px-12 flex items-center justify-center flex-col gap-5">
    <span
      text-5xl
      color-gradient
      font-semibold
      cursor="default"
    >
      Hello, world!
    </span>
    <TextButton
      class="button-gradient hover:button-hover text-2xl"
      icon="i-carbon-sun dark:i-carbon-moon"
      @click="toggleDark()"
    >
      Show me the {{ isDark ? 'light' : 'dark' }}
    </TextButton>
  </main>
</template>

<style>
@import '@unocss/reset/tailwind.css';
/*  Font reset, place ui fonts last... Does not look vertically aligned :grrr: */
html {
  font-family: sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", ui-sans-serif, system-ui;
}
</style>
