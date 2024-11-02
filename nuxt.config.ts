import process from 'node:process'
import { appDescription } from './app/config/site'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    './modules/shadcn',
    '@nuxt/content',
    '@nuxt/image',
  ],

  debug: true,

  devtools: {
    enabled: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  // Build as SPA application
  // ssr: false,

  routeRules: {
    // '/admin/**': { ssr: false },
    // '/account/**': { ssr: false },
    '/api/**': {
      cors: true,
      proxy: { to: 'http://127.0.0.1:42175/api/**' },
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag === 'iconify-icon',
    },
  },

  // * Note that this option will not override the default directories (~/components, ~/composables, ~/middleware, ~/utils).
  imports: {
    dirs: ['stores'],
  },

  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark-dimmed',
      // OR
      // theme: {
      //   // Default theme (same as single string)
      //   default: 'vitesse-dark',
      //   // Theme used if `html.dark`
      //   dark: 'github-dark',
      //   // Theme used if `html.sepia`
      //   sepia: 'monokai'
      // }
    },
  },

  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },

  css: [
    // '@unocss/reset/tailwind-compat.css',
  ],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classSuffix: '',
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-07-12',
})
