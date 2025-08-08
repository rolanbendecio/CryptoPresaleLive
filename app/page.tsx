import React from 'react'
import fs from 'fs'
import path from 'path'
import PresaleCard from '@/components/PresaleCard'
import StatsBar from '@/components/StatsBar'
import SEO from '@/components/SEO'
import HomePageClient from '@/components/HomePageClient'
import JsonLd from '@/components/JsonLd'
import { generateLiveBlogPostingSchema, generateWebsiteSchema, generateOrganizationSchema, generateCollectionPageSchema } from '@/lib/schemas'

interface PresaleData {
  title: string
  symbol: string
  description: string
  status: string
  raise: number | string
  apy: string
  affiliateLink: string
  slug: string
  date: string
  category?: string
  progress?: number
  participants?: number
  endDate?: string
}

function loadPresaleData(): PresaleData[] {
  try {
    const dataDir = path.join(process.cwd(), 'data')
    const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'))
    
    const presales: PresaleData[] = []
    
    for (const file of files) {
      try {
        const filePath = path.join(dataDir, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const data = JSON.parse(fileContent)
        
        // Create slug from filename
        const slug = file.replace('.json', '')
        
        presales.push({
          ...data,
          slug,
          date: data.date || new Date().toISOString()
        })
      } catch (error) {
        console.error(`Error reading ${file}:`, error)
      }
    }
    
    return presales.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error loading presale data:', error)
    return []
  }
}

export default function HomePage() {
  const posts = loadPresaleData()

  return (
    <>
      <SEO 
        title="Live Crypto Presales"
        description="Discover the hottest cryptocurrency presales with real-time updates and exclusive access. Track live prices, analyze performance, and never miss an opportunity."
        keywords="crypto presales, cryptocurrency, presale, ICO, IDO, crypto investment, blockchain, live prices"
      />
      <JsonLd data={generateLiveBlogPostingSchema(posts)} />
      <JsonLd data={generateWebsiteSchema()} />
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateCollectionPageSchema(
        "Live Crypto Presales Collection",
        "Real-time tracking of active cryptocurrency presales with live updates every 8 seconds",
        posts
      )} />
      <HomePageClient initialPosts={posts} />
    </>
  )
}