import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  rules: [
    [
      /^bg-size-([0-9]+%)$/,
      ([, c]) => ({ 'background-size': `${c}` }),
    ],
  ],
  shortcuts: {
    'gradient': 'from-pink-400 via-purple-500 to-green-600',
    'bg-base': 'bg-white dark:bg-gray-100',
    'bg-gradient': 'bg-gradient-to-r gradient bg-size-300% animate-bg-panning animate-direction-alternate',
    'border-gradient': 'border-gradient-to-r gradient',
    'color-base': 'text-gray-900 dark:text-gray-300',
    'color-fade': 'text-gray-900:50 dark:text-gray-300:50',
    'color-gradient': 'bg-gradient bg-clip-text text-transparent',
    'button-gradient': 'bg-gradient text-gray-100/90 dark:text-gray-300/90',
    'button-hover': 'text-gray-100 dark:text-gray-300',
  },
  presets: [
    presetAttributify(),
    presetIcons(),
    presetUno(),
  ],
  theme: {
    animation: {
      keyframes: {
        'bg-panning': '{0% {background-position: 0% 50%;} 50% {background-position: 100% 50%;} 100% {background-position: 0% 50%;}}',
      },
      durations: {
        'bg-panning': '20s',
      },
      timingFns: {
        'bg-panning': 'ease',
      },
      counts: {
        'bg-panning': 'infinite',
      },
    },
  },
})
