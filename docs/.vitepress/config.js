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
              //愚公移山
            { text: 'Yugong Mueve las Montañas ⛰️', link: '/yugong-mueve-las-montañas/index' },
               //女娲补天
            { text: 'Nüwa Repara el Cielo 🌌', link: '/nüwa-repara-el-cielo/index' },
               //盘古开天
            { text: 'Pangu Crea el Mundo 🌄', link: '/pangu-crea-el-mundo/index' },
               //嫦娥奔月
            { text: "Chang'e Vuela a la Luna 🌕", link: '/chang\'e-vuela-a-la-luna/index' },
               //后羿射日
            { text: 'Houyi Dispara a los Soles 🌞', link: '/houyi-dispara-a-los-soles/index' },
               //牛郎织女
            { text: 'El Pastor y la Tejedora 🌌', link: '/el-pastor-y-la-tejedora/index' },
               //八仙过海
            { text: 'Los Ocho Inmortales Cruzan el Mar 🌊', link: '/los-ocho-inmortales-cruzan-el-mar/index' },
               //夸父逐日
            { text: 'Kuafu Persigue el Sol 🌞', link: '/kuafu-persigue-el-sol/index' }
          ]
        },
        // 寓言故事部分
        {
          text: 'Fábulas Chinas 📚',
          collapsible: true,
          items: [
               //杞人忧天
            { text: 'El Hombre de Qi que Temía al Cielo 🌤️', link: '/el-hombre-de-qi-que-temía-al-cielo/index' },
               //画蛇添足
            { text: 'Pintar Patas a la Serpiente 🐍', link: '/pintar-patas-a-la-serpiente/index' },
               //精卫填海
            { text: 'El Pájaro Jingwei Llena el Mar 🌊', link: '/el-pájaro-jingwei-llena-el-mar/index' },
               //刻舟求剑
            { text: 'Marcar el Barco para Encontrar la Espada 🗡️🚢', link: '/marcar-el-barco-para-encontrar-la-espada/index' },
               //叶公好龙
            { text: 'El Señor Ye Ama a los Dragones 🐉🏠', link: '/el-señor-ye-ama-a-los-dragones/index' },
               //盲人摸象
            { text: 'Los Ciegos y el Elefante 👥🐘', link: '/los-ciegos-y-el-elefante/index' },
               //井底之蛙
            { text: 'La Rana en el Fondo del Pozo 🐸', link: '/la-rana-en-el-fondo-del-pozo/index' },
               //狐假虎威
            { text: 'El Zorro que Aprovecha el Poder del Tigre 🦊👑', link: '/el-zorro-que-aprovecha-el-poder-del-tigre/index' },
               //守株待兔
            { text: 'Esperar al Conejo Junto al Árbol 🌳🐇', link: '/esperar-al-conejo-junto-al-árbol/index' },
               //自相矛盾
            { text: 'Contradecirse a Sí Mismo 🛡️⚔️', link: '/contradecirse-a-sí-mismo/index' },
               //望梅止渴
            { text: 'Mirar los Ciruelos para Calmar la Sed 🌳🍒', link: '/mirar-los-ciruelos-para-calmar-la-sed/index' },
               //塞翁失马
            { text: 'Suerte o Desgracia? El Abuelo Optimista', link: '/suerte-o-desgracia-el-abuelo-optimista/index' }
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
  // 构建后生成 sitemap 和 RSS feed
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

        // 处理路径 - 匹配Windows路径格式
        const urlPath = file
            .replace(/\\/g, '/') // 先统一替换为正斜杠
            .replace(/^docs\//, '') // 移除开头的docs/
            .replace(/\.md$/, '')
            .replace(/\/index$/, ''); // 处理 index.md
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

      // 生成RSS XML
      const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Lejano Oriente</title>
    <description>Historias del Lejano Oriente</description>
    <link>https://oricuento.com</link>
    <atom:link href="https://oricuento.com/rss.xml" rel="self" type="application/rss+xml" />
    <pubDate>${new Date().toUTCString()}</pubDate>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>60</ttl>
${pages.map(page => `
    <item>
      <title>${page.loc.split('/').pop() || 'Home'}</title>
      <link>${page.loc}</link>
      <pubDate>${new Date(page.lastmod).toUTCString()}</pubDate>
      <guid isPermaLink="true">${page.loc}</guid>
      <description>Historia china sobre ${page.loc.split('/').pop() || 'mitología china'}</description>
    </item>`).join('')}
  </channel>
</rss>`;

      const robotstxt = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
RSS: ${baseUrl}/rss.xml`
      // 🔧 修复：确保目录存在
      const outputPath = resolve('docs/.vitepress/dist/sitemap.xml')
      const robotsOutputPath = resolve('docs/.vitepress/dist/robots.txt')
      const rssOutputPath = resolve('docs/.vitepress/dist/rss.xml')
      const outputDir = dirname(outputPath) // 获取目录路径

      // 如果目录不存在，创建它
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true })
        console.log('📁 Created directory:', outputDir)
      }
      writeFileSync(outputPath, sitemap)
      writeFileSync(robotsOutputPath, robotstxt)
      writeFileSync(rssOutputPath, rss)
      console.log('✅ Sitemap generated successfully!')
      console.log('✅ RSS feed generated successfully!')
      console.log(`📄 Total pages: ${pages.length}`)
    } catch (error) {
      console.error('❌ Build end process failed:', error)
    }
  }
}