export default {
  lang: 'en-US',
  title: 'Lejano Oriente',
  description: 'Historias del Lejano Oriente',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' }
    ],
    sidebar: {
      '/articles/': [
        { text: 'Getting Started', link: '/articles/index' }
      ]
    }
  }
}