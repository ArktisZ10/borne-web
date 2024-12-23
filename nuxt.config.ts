// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  eslint: {
    config:
    {
      stylistic: true
    }
  },
  modules: ['@nuxt/eslint'],
  typescript: {
    typeCheck: true,
    strict: true,
  },
})