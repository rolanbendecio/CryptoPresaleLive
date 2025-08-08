import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Dynamic presale pages
  const presalePages: MetadataRoute.Sitemap = []
  
  try {
    const dataDir = path.join(process.cwd(), 'data')
    const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'))
    
    for (const file of files) {
      const slug = file.replace('.json', '')
      const filePath = path.join(dataDir, file)
      const stats = fs.statSync(filePath)
      
      presalePages.push({
        url: `${baseUrl}/presale/${slug}`,
        lastModified: stats.mtime,
        changeFrequency: 'daily',
        priority: 0.9,
      })
    }
  } catch (error) {
    console.error('Error generating presale sitemap entries:', error)
  }

  return [...staticPages, ...presalePages]
}