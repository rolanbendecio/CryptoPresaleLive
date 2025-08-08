import React from 'react'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import SEO from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import { generatePresaleSchema, generateBreadcrumbSchema, generateFinancialServiceSchema } from '@/lib/schemas'

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
}

function loadPresaleBySlug(slug: string): PresaleData | null {
  try {
    const filePath = path.join(process.cwd(), 'data', `${slug}.json`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContent)
    
    return {
      ...data,
      slug,
      date: data.date || new Date().toISOString()
    }
  } catch (error) {
    console.error(`Error loading presale ${slug}:`, error)
    return null
  }
}

export async function generateStaticParams() {
  try {
    const dataDir = path.join(process.cwd(), 'data')
    const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'))
    
    return files.map(file => ({
      slug: file.replace('.json', '')
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default function PresaleDetailPage({ params }: { params: { slug: string } }) {
  const presale = loadPresaleBySlug(params.slug)

  if (!presale) {
    notFound()
  }

  const getStatusBadge = (status: string) => {
    const statusStyles: Record<string, string> = {
      'Live': 'bg-green-500 text-white',
      'Upcoming': 'bg-yellow-500 text-white', 
      'Ended': 'bg-red-500 text-white',
      'Paused': 'bg-gray-500 text-white'
    }
    
    return statusStyles[status] || 'bg-gray-500 text-white'
  }

  return (
    <>
      <SEO 
        title={presale.title}
        description={presale.description}
        keywords={`${presale.title}, ${presale.symbol}, crypto presale, ${presale.category}, cryptocurrency investment`}
        presale={presale}
        type="article"
        url={`https://cryptolaunch.app/presale/${presale.slug}`}
      />
      <JsonLd data={generatePresaleSchema(presale)} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Presales", url: "/" },
        { name: presale.title, url: `/presale/${presale.slug}` }
      ])} />
      <JsonLd data={generateFinancialServiceSchema()} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Presales
        </Link>

        {/* Header */}
        <div className="crypto-card rounded-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {presale.title}
              </h1>
              <p className="text-gray-400 text-lg">{presale.symbol}</p>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusBadge(presale.status)}`}>
              {presale.status}
            </span>
          </div>

          <p className="text-gray-300 text-lg mb-6">
            {presale.description}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <h3 className="text-gray-400 text-sm mb-2">Total Raised</h3>
              <p className="text-2xl font-bold text-white">{presale.raise}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <h3 className="text-gray-400 text-sm mb-2">APY</h3>
              <p className="text-2xl font-bold text-green-400">{presale.apy}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <h3 className="text-gray-400 text-sm mb-2">Status</h3>
              <p className="text-2xl font-bold text-white">{presale.status}</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <a
              href={presale.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block crypto-gradient text-white text-xl font-bold py-4 px-12 rounded-xl hover:opacity-90 transition-opacity"
            >
              🚀 Invest in {presale.symbol} Now
            </a>
          </div>
        </div>

        {/* Additional Information */}
        <div className="crypto-card rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Investment Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Risk Disclaimer</h3>
              <p className="text-gray-300">
                Cryptocurrency investments are highly volatile and risky. Only invest what you can afford to lose. 
                This information is for educational purposes only and should not be considered as financial advice.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">How to Participate</h3>
              <ol className="list-decimal list-inside text-gray-300 space-y-2">
                <li>Click the investment link above to visit the official presale page</li>
                <li>Connect your cryptocurrency wallet</li>
                <li>Choose your investment amount</li>
                <li>Confirm the transaction and wait for confirmation</li>
                <li>Your tokens will be distributed according to the project&apos;s schedule</li>
              </ol>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              Last updated: {new Date(presale.date).toLocaleDateString()} • 
              Information sourced from official project channels
            </p>
          </div>
        </div>
      </div>
    </>
  )
}