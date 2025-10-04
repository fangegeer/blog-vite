export default {
  lang: 'en-US',
  title: 'My Blog',
  description: 'A VitePress-powered blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles/' },
      { text: '塞翁失马', link: '/saiwengshima/' },
      { text: 'About', link: '/about/' }
    ],
    sidebar: {
      '/articles/': [
        { text: 'Getting Started', link: '/articles/index' }
      ],
      '/saiwengshima/': [
        { text: '塞翁失马', link: '/saiwengshima/getting-started' }
      ]
    }
  }
}