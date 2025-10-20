// .vitepress/config.js
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname  } from 'path'
import { glob } from 'glob'

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
      // 根路径的侧边栏配置
      '/': [
        // 神话传说部分
        {
          text: 'Mitología China 🐉',
          collapsible: true,
          items: [
            { text: 'Yugong Mueve las Montañas ⛰️', link: '/1yugongyishan/index' },
            { text: 'Nüwa Repara el Cielo 🌌', link: '/2nvwabutian/index' },
            { text: 'Pangu Crea el Mundo 🌄', link: '/3pangukaitian/index' },
            { text: "Chang'e Vuela a la Luna 🌕", link: '/4changebenyue/index' },
            { text: 'Houyi Dispara a los Soles 🌞', link: '/5houyisheri/index' },
            { text: 'El Pastor y la Tejedora 🌌', link: '/6niulangzhinv/index' },
            { text: 'Los Ocho Inmortales Cruzan el Mar 🌊', link: '/8baxianguohai/index' },
            { text: 'Kuafu Persigue el Sol 🌞', link: '/9kuafuzhuri/index' }
          ]
        },
        // 寓言故事部分
        {
          text: 'Fábulas Chinas 📚',
          collapsible: true,
          items: [
            { text: 'El Hombre de Qi que Temía al Cielo 🌤️', link: '/7qirenyoutian/index' },
            { text: 'Pintar Patas a la Serpiente 🐍', link: '/10huashetianzu/index' },
            { text: 'El Pájaro Jingwei Llena el Mar 🌊', link: '/11jingweitianhai/index' },
            { text: 'Marcar el Barco para Encontrar la Espada 🗡️🚢', link: '/13kezhouqiujian/index' },
            { text: 'El Señor Ye Ama a los Dragones 🐉🏠', link: '/14yegonghaolong/index' },
            { text: 'Los Ciegos y el Elefante 👥🐘', link: '/15mangrenmoxiang/index' },
            { text: 'La Rana en el Fondo del Pozo 🐸', link: '/16jingdizhiwa/index' },
            { text: 'El Zorro que Aprovecha el Poder del Tigre 🦊👑', link: '/17hujiahuwei/index' },
            { text: 'Esperar al Conejo Junto al Árbol 🌳🐇', link: '/18shouzhudaitu/index' },
            { text: 'Contradecirse a Sí Mismo 🛡️⚔️', link: '/19zixiangmaodun/index' },
            { text: 'Mirar los Ciruelos para Calmar la Sed 🌳🍒', link: '/20wangmeizhike/index' },
            { text: 'Suerte o Desgracia? El Abuelo Optimista', link: '/saiwengshima/index' }
          ]
        },
        // 其他部分
        {
          text: 'Otros Contenidos 📝',
          collapsible: true,
          items: [
            { text: 'About', link: '/about/' },
            // { text: 'Articles', link: '/articles/' }
          ]
        }
      ]
    }
  },
    // Vite 配置
    // vite: {
    //     resolve: {
    //         alias: {
    //             '@theme': '../theme'
    //         }
    //     }
    // },
  // 构建后生成 sitemap
  async buildEnd() {
    try {
      // 获取所有 markdown 文件
      const files = await glob('**/*.md', {
        ignore: ['node_modules/**', '.vitepress/**', 'README.md']
      })

      const baseUrl = 'https://oricuento.com'
      const pages = []

      // 添加首页
      pages.push({
        loc: baseUrl + '/',
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: '1.0'
      })

      // 处理其他页面
      files.forEach(file => {
        if (file === 'index.md') return // 首页已添加

        const urlPath = file
            .replace(/\.md$/, '')
            .replace(/\\/g, '/')
            .replace(/\/index$/, '') // 处理 index.md

        pages.push({
          loc: `${baseUrl}/${urlPath}`,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: urlPath.includes('guide') ? '0.9' : '0.8'
        })
      })

      // 生成 sitemap XML
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?> 
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map(page => `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`

      const robotstxt = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml`
      // 🔧 修复：确保目录存在
      const outputPath = resolve('docs/.vitepress/dist/sitemap.xml')
      const robotsOutputPath = resolve('docs/.vitepress/dist/robots.txt')
      const outputDir = dirname(outputPath) // 获取目录路径

      // 如果目录不存在，创建它
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true })
        console.log('📁 Created directory:', outputDir)
      }
      writeFileSync(outputPath, sitemap)
      writeFileSync(robotsOutputPath, robotstxt)
      console.log('✅ Sitemap generated successfully!')
      console.log(`📄 Total pages: ${pages.length}`)
    } catch (error) {
      console.error('❌ Sitemap generation failed:', error)
    }
  }
}