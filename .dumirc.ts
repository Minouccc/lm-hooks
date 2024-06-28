import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'lm-hooks',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/' },
    ],
  },
  base: '/lm-hooks',
  publicPath: '/lm-hooks/',
  exportStatic: {},
});
