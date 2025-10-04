export default {
  lang: 'en-US',
  title: 'My Blog',
  description: 'A VitePress-powered blog',
  outDir: '../dist', // 确保输出目录正确
  // 对于 SPA 路由很重要
  base: '/', // 如果是子路径需要调整
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles/' },
      { text: 'About', link: '/about/' }
    ],
    sidebar: {
      '/articles/': [
        { text: 'Getting Started', link: '/articles/getting-started' }
      ]
    }
  }
}