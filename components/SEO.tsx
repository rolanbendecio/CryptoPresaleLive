'use client'

import React from 'react'
import Head from 'next/head'
import { 
  generateBlogPostingSchema, 
  generateProductSchema, 
  generateOrganizationSchema,
  generateWebsiteSchema 
} from '@/lib/seoSchema'

interface PresaleData {
  title: string
  description: string
  symbol: string
  category?: string
  date: string
  slug: string
  raise: number | string
  apy: string
  status: string
  affiliateLink: string
}

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  presale?: PresaleData | null
  type?: string
  url?: string
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords,
  presale = null,
  type = 'website',
  url = 'https://cryptolaunch.app'
}) => {
  const defaultTitle = "CryptoLaunch - Live Crypto Presales Tracker"
  const defaultDescription = "Discover the hottest cryptocurrency presales with real-time updates, exclusive access, and expert analysis. Get early access to the next big crypto projects."
  const defaultKeywords = "crypto presales, cryptocurrency, presale, ICO, IDO, crypto investment, blockchain"

  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const pageDescription = description || defaultDescription
  const pageKeywords = keywords || defaultKeywords

  const schemas = [generateOrganizationSchema(), generateWebsiteSchema()]
  
  if (presale) {
    schemas.push(generateBlogPostingSchema(presale))
    schemas.push(generateProductSchema(presale))
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content="https://cryptolaunch.app/og-image.jpg" />
      <meta property="og:site_name" content="CryptoLaunch" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content="https://cryptolaunch.app/og-image.jpg" />
      <meta property="twitter:site" content="@cryptolaunch" />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="CryptoLaunch" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Schema markup */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      ))}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Head>
  )
}

export default SEO