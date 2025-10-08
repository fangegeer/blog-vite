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
      '/saiwengshima/': [
        { text: 'Suerte o Desgracia? El Abuelo Optimista', link: '/saiwengshima/index' }
      ]
    }
  },
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
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
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