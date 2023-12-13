import starlight from '@astrojs/starlight'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import vite from './viteConfig'

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    vue({
      appEntrypoint: '/src/vue',
      jsx: true,
    }),
    UnoCSS({ injectReset: true }),
    // https://starlight.astro.build/zh-cn/
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/daotl/starlight-starter',
      },
      // 为此网站设置英语为默认语言。
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
        // 英文文档在 `src/content/docs/en/` 中。
        en: {
          label: 'English',
        },
        // 阿拉伯文档在 `src/content/docs/ar/` 中。
        ar: {
          label: 'العربية',
          dir: 'rtl',
        },
      },
      sidebar: [
        {
          label: 'Guides',
          translations: {
            'zh-CN': '指南',
          },
          link: '/guides',
        },
        {
          label: 'VUE',
          items: [
            {
              label: 'example',
              translations: {
                'zh-CN': '事例',
                en: 'Example',
              },
              link: '/vue/example',
            },
            {
              label: 'element',
              translations: {
                'zh-CN': 'Element plus',
                en: 'Element plus',
              },
              link: '/vue/element-plus',
            },
          ],

        },
      ],
    }),
  ],
  // Temporarily removed for causing error:
  //   error   Failed to parse source for import analysis because the content contains invalid JS syntax. You may need to install appropriate plugins to handle the .md file format, or if it's an asset, add "**/*.md" to `assetsInclude` in your configuration.
  // See: https://github.com/withastro/astro/issues/5265
  vite,
})
