export default {
  srcDir: './src',
  title: 'UnoCSS Preset Test-1',
  description: 'Just playing around.',
  themeConfig: {
    sidebar: [
      {
        text: 'Rules',
        items: [
          { text: 'Display', link: '/rules/display' },
        ],
      },
    ],
  },
  rewrites: {
    'docs/:page': ':page',
    'rules/:rule': 'rules/:rule',
  },
}
