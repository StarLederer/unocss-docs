import parent from '../../preset-test-1/.vitepress/config'

export default {
  srcDir: './src',
  title: 'UnoCSS Preset Test-1',
  description: 'Just playing around.',
  themeConfig: {
    sidebar: [
      {
        text: 'Rules',
        items: [
          ...parent.themeConfig.sidebar[0].items,
          { text: 'Visibility', link: '/rules/visibility' },
        ],
      },
    ],
  },
  rewrites: {
    'docs/:page': ':page',
    'rules/:rule': 'rules/:rule',
    // '../../preset-test-1/rules/:rule': 'rules/:rule',
  },
}
