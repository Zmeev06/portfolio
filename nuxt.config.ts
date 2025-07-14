// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import { PluginConfig } from 'svgo'

const svgConfig = {
  name: 'prefixIds',
  params: {
    prefixIds: true,
    prefixClassNames: true
  }
} as PluginConfig

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      title: '',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        {
          name: 'description',
          content: ''
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ]
    }
  },
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'component',
        svgoConfig: {
          plugins: [
            svgConfig
          ]
        }
      })
    ]
  },
  modules: [],
  css: ['/src/assets/styles/main.css'],
  devtools: { enabled: true }
})