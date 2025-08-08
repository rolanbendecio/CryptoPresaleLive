import React from 'react'
import Link from 'next/link'
import SEO from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/schemas'

export const metadata = {
  title: 'Crypto Presale Blog 2025 | Expert Analysis & Investment Guides',
  description: '📝 Read 100+ expert guides on crypto presales. Due diligence tips, scam alerts, weekly top picks. Written by CFA analysts with $50M+ managed. Updated daily.',
  keywords: 'crypto presale blog, ICO analysis 2025, presale investment guide, token sale reviews, crypto due diligence, presale scam alerts, defi presale news, expert crypto analysis, tokenomics explained, presale strategies 2025',
  openGraph: {
    title: 'CryptoLaunch Blog - Crypto Presale News & Insights',
    description: 'Expert analysis, guides, and news about cryptocurrency presales and early-stage investments.',
    type: 'website',
    url: 'https://yourdomain.com/blog',
  }
}

// Sample blog posts data (in production, this would come from a CMS or database)
const blogPosts = [
  {
    id: 1,
    title: "How to Spot Legitimate Crypto Presales in 2025",
    excerpt: "Learn the key indicators that separate legitimate presales from scams. Our comprehensive guide covers team verification, tokenomics analysis, and red flags to watch for.",
    category: "Guides",
    author: "CryptoLaunch Team",
    date: "2025-01-08",
    readTime: "8 min read",
    image: "/blog/legitimate-presales.jpg",
    slug: "how-to-spot-legitimate-crypto-presales-2025",
    featured: true
  },
  {
    id: 2,
    title: "Top 10 Presales to Watch This Week",
    excerpt: "Our weekly roundup of the most promising presales launching soon. Detailed analysis of each project's potential and investment considerations.",
    category: "Analysis",
    author: "Market Research Team",
    date: "2025-01-07",
    readTime: "5 min read",
    image: "/blog/weekly-presales.jpg",
    slug: "top-10-presales-watch-this-week",
    featured: true
  },
  {
    id: 3,
    title: "MetaMask Setup Guide for Presale Participation",
    excerpt: "Step-by-step tutorial on setting up MetaMask wallet for participating in crypto presales. Includes security best practices and common mistakes to avoid.",
    category: "Tutorials",
    author: "Tech Team",
    date: "2025-01-06",
    readTime: "10 min read",
    image: "/blog/metamask-guide.jpg",
    slug: "metamask-setup-guide-presale-participation"
  },
  {
    id: 4,
    title: "Understanding Vesting Schedules in Presales",
    excerpt: "What are vesting schedules and why do they matter? Learn how token unlock periods affect your investment strategy.",
    category: "Education",
    author: "CryptoLaunch Team",
    date: "2025-01-05",
    readTime: "6 min read",
    image: "/blog/vesting-schedules.jpg",
    slug: "understanding-vesting-schedules-presales"
  },
  {
    id: 5,
    title: "Solana vs Ethereum: Which Chain for Presales?",
    excerpt: "Comparative analysis of presale opportunities on different blockchains. Gas fees, speed, and ecosystem considerations.",
    category: "Analysis",
    author: "Blockchain Expert",
    date: "2025-01-04",
    readTime: "7 min read",
    image: "/blog/solana-vs-ethereum.jpg",
    slug: "solana-vs-ethereum-presales-comparison"
  },
  {
    id: 6,
    title: "Breaking: New SEC Guidelines for Crypto Presales",
    excerpt: "Latest regulatory updates affecting crypto presales in the US. What investors and projects need to know.",
    category: "News",
    author: "Legal Team",
    date: "2025-01-03",
    readTime: "4 min read",
    image: "/blog/sec-guidelines.jpg",
    slug: "sec-guidelines-crypto-presales-2025"
  }
]

const categories = [
  { name: "All", slug: "all", count: blogPosts.length },
  { name: "News", slug: "news", count: 8 },
  { name: "Guides", slug: "guides", count: 12 },
  { name: "Analysis", slug: "analysis", count: 15 },
  { name: "Tutorials", slug: "tutorials", count: 9 },
  { name: "Education", slug: "education", count: 11 },
]

export default function BlogPage() {
  return (
    <>
      <SEO 
        title="Crypto Blog & News - Latest Presale Updates"
        description="Stay updated with the latest crypto presale news, guides, and analysis."
        keywords="crypto blog, presale news, cryptocurrency articles, investment guides"
      />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" }
      ])} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "CryptoLaunch Blog",
        "description": "Expert insights on crypto presales and early-stage investments",
        "url": "https://yourdomain.com/blog",
        "publisher": {
          "@type": "Organization",
          "name": "CryptoLaunch"
        }
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Crypto Presale Blog & News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights, breaking news, and comprehensive guides to help you navigate the world of crypto presales
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(category => (
            <button
              key={category.slug}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                category.slug === 'all' 
                  ? 'crypto-gradient text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.filter(post => post.featured).map(post => (
              <article key={post.id} className="crypto-card rounded-xl overflow-hidden hover-lift">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs crypto-gradient px-2 py-1 rounded-full text-white">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <span>{post.author}</span> • <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <article key={post.id} className="crypto-card rounded-xl p-6 hover-lift">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-300">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-500/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Never Miss a Presale Opportunity
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive presale alerts, market analysis, and investment tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
            />
            <button
              type="submit"
              className="crypto-gradient text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-12">
          <button className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors">
            ← Previous
          </button>
          <button className="px-4 py-2 crypto-gradient text-white rounded-lg">1</button>
          <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">2</button>
          <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">3</button>
          <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
            Next →
          </button>
        </div>
      </div>
    </>
  )
}