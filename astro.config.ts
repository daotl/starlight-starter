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
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', link: '/guides/example/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
  // Temporarily removed for causing error:
  //   error   Failed to parse source for import analysis because the content contains invalid JS syntax. You may need to install appropriate plugins to handle the .md file format, or if it's an asset, add "**/*.md" to `assetsInclude` in your configuration.
  // See: https://github.com/withastro/astro/issues/5265
  vite,
})
