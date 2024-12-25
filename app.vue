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
    <button
      button-gradient
      hover:button-hover
      text-2xl
      @click="toggleDark()"
    >
      <div
        i-carbon-sun
        dark:i-carbon-moon
        mr-2
      />
      Show me the {{ isDark ? 'light' : 'dark' }}
    </button>
  </main>
</template>

<style>
@import '@unocss/reset/tailwind.css';
</style>
