---
title: "极简博客 — fangegeer"
description: "极简博客：短篇随笔、故事与技术笔记，基于 VitePress 构建。语义化结构与结构化数据以优化 Google 抓取与索引。"
keywords:
  - "极简博客"
  - "随笔"
  - "故事"
  - "技术笔记"
  - "VitePress"
  - "fangegeer"
author: "fangegeer"
canonical: "https://fangegeer.github.io/blog-vite/"
---

# 极简博客


## 最新文章（节选）

- <h3><a href="/1yugongyishan/">愚公移山</a></h3>
  <p>短篇 / 寓言类随笔。</p>

- <h3><a href="/2nvwabutian/">女蜗补天</a></h3>
  <p>神话与反思的短文集。</p>

- <h3><a href="/3pangukaitian/">庞乌开天</a></h3>
  <p>叙事与想象。</p>

- <h3><a href="/7qirenyoutian/index">契人有天（Suerte o Desgracia? El Abuelo Optimista）</a></h3>
  <p>现有链接示例（跨语言叙事短文）。</p>

- <h3><a href="/about/">关于本博客</a></h3>
  <p>站点说明与作者信息。</p>

## 订阅与发现

- 站点地图：<a href="/sitemap.xml">/sitemap.xml</a>（建议自动生成）
- RSS：<a href="/rss.xml">/rss.xml</a>

## SEO 与可抓取性建议

1. 在 .vitepress/config.js 的 head 中加入 meta description、og:*、twitter:*、robots、language 等标签。
2. 为每篇文章添加 frontmatter（title、description、date、tags、canonical）。
3. 生成并发布 sitemap.xml 与 RSS，确保放在站点根目录以便爬虫发现。
4. 保持页面轻量、减少依赖大量客户端 JS 渲染，优先服务端/静态渲染内容，以提高抓取效率与首屏速度。
5. 使用清晰的内部链接（绝对或站内绝对路径），并在重要页面使用 rel="canonical" 指向首选 URL。
6. 若可能，为文章添加 JSON-LD Article schema（headline、author、datePublished、description、image 等）。
