import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SEO from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/schemas'

// Sample blog posts data (in production, this would come from a CMS or database)
const blogPosts = {
  'how-to-spot-legitimate-crypto-presales-2025': {
    title: "How to Spot Legitimate Crypto Presales in 2025",
    content: `
      <h2>Introduction</h2>
      <p>With the explosive growth of cryptocurrency presales, distinguishing legitimate opportunities from scams has become crucial for investors. This comprehensive guide will equip you with the knowledge to make informed decisions.</p>
      
      <h2>1. Team Verification</h2>
      <p>The first and most important step is verifying the team behind the project. Legitimate presales have:</p>
      <ul>
        <li>Public team members with verifiable LinkedIn profiles</li>
        <li>Previous experience in blockchain or relevant industries</li>
        <li>Active engagement with the community</li>
        <li>KYC (Know Your Customer) verification badges from reputable platforms</li>
      </ul>
      
      <h2>2. Smart Contract Audits</h2>
      <p>Professional audits are non-negotiable for legitimate presales. Look for:</p>
      <ul>
        <li>Audits from recognized firms (CertiK, Hacken, ConsenSys)</li>
        <li>Published audit reports with addressed vulnerabilities</li>
        <li>Contract code verified on Etherscan or BSCScan</li>
        <li>No hidden functions or suspicious code</li>
      </ul>
      
      <h2>3. Tokenomics Analysis</h2>
      <p>Sustainable tokenomics are essential for long-term success:</p>
      <ul>
        <li>Clear token distribution with no excessive team allocation</li>
        <li>Reasonable vesting schedules (12-24 months minimum)</li>
        <li>Liquidity lock commitments</li>
        <li>Anti-dump mechanisms</li>
      </ul>
      
      <h2>4. Community and Social Proof</h2>
      <p>Genuine projects build organic communities:</p>
      <ul>
        <li>Active Telegram/Discord with real engagement (not just moon boys)</li>
        <li>Regular AMAs and transparency</li>
        <li>Organic growth patterns (beware of sudden follower spikes)</li>
        <li>Community feedback implementation</li>
      </ul>
      
      <h2>5. Red Flags to Avoid</h2>
      <p>Stay away from presales showing these warning signs:</p>
      <ul>
        <li>Anonymous teams with no accountability</li>
        <li>Unrealistic promises (10,000% returns guaranteed)</li>
        <li>Pressure tactics and FOMO marketing</li>
        <li>No clear use case or whitepaper</li>
        <li>Copied content or plagiarized documentation</li>
        <li>Fake partnerships or endorsements</li>
      </ul>
      
      <h2>Due Diligence Checklist</h2>
      <p>Before investing, complete this checklist:</p>
      <ol>
        <li>✓ Team verified and doxxed</li>
        <li>✓ Smart contract audited</li>
        <li>✓ Whitepaper reviewed</li>
        <li>✓ Tokenomics analyzed</li>
        <li>✓ Community engaged</li>
        <li>✓ Use case validated</li>
        <li>✓ Legal compliance checked</li>
        <li>✓ Risk assessment completed</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Investing in crypto presales can be rewarding, but due diligence is essential. Use this guide as your framework for evaluating opportunities, and never invest more than you can afford to lose.</p>
    `,
    excerpt: "Learn the key indicators that separate legitimate presales from scams. Our comprehensive guide covers team verification, tokenomics analysis, and red flags to watch for.",
    category: "Guides",
    author: "CryptoLaunch Team",
    authorBio: "The CryptoLaunch Team consists of blockchain experts, financial analysts, and crypto enthusiasts dedicated to providing accurate presale information.",
    date: "2025-01-08",
    lastModified: "2025-01-08",
    readTime: "8 min read",
    tags: ["presale", "due diligence", "investment", "security", "guide"],
    relatedPosts: [
      "understanding-tokenomics-in-presales",
      "common-presale-scams-to-avoid",
      "smart-contract-audits-explained"
    ]
  },
  'metamask-setup-guide-presale-participation': {
    title: "MetaMask Setup Guide for Presale Participation",
    content: `
      <h2>Why MetaMask for Presales?</h2>
      <p>MetaMask is the most widely supported wallet for participating in crypto presales. It's compatible with Ethereum, BSC, Polygon, and other EVM chains where most presales occur.</p>
      
      <h2>Step 1: Install MetaMask</h2>
      <ol>
        <li>Visit metamask.io (always verify the URL)</li>
        <li>Click "Download" and select your browser</li>
        <li>Add the extension to Chrome/Firefox/Brave</li>
        <li>Click the MetaMask icon in your browser toolbar</li>
      </ol>
      
      <h2>Step 2: Create Your Wallet</h2>
      <ol>
        <li>Click "Get Started"</li>
        <li>Select "Create a Wallet"</li>
        <li>Create a strong password</li>
        <li>IMPORTANT: Write down your 12-word seed phrase</li>
        <li>Store it securely offline (never digital)</li>
        <li>Confirm your seed phrase</li>
      </ol>
      
      <h2>Step 3: Secure Your Wallet</h2>
      <ul>
        <li>Enable 2FA if available</li>
        <li>Never share your seed phrase</li>
        <li>Use a hardware wallet for large amounts</li>
        <li>Verify transaction details before confirming</li>
      </ul>
      
      <h2>Step 4: Add Networks for Presales</h2>
      <p>Different presales use different blockchains. Here's how to add them:</p>
      
      <h3>Binance Smart Chain (BSC)</h3>
      <ul>
        <li>Network Name: BSC Mainnet</li>
        <li>RPC URL: https://bsc-dataseed.binance.org/</li>
        <li>Chain ID: 56</li>
        <li>Symbol: BNB</li>
        <li>Explorer: https://bscscan.com</li>
      </ul>
      
      <h3>Polygon (MATIC)</h3>
      <ul>
        <li>Network Name: Polygon Mainnet</li>
        <li>RPC URL: https://polygon-rpc.com/</li>
        <li>Chain ID: 137</li>
        <li>Symbol: MATIC</li>
        <li>Explorer: https://polygonscan.com</li>
      </ul>
      
      <h2>Step 5: Fund Your Wallet</h2>
      <ol>
        <li>Copy your wallet address</li>
        <li>Purchase crypto from an exchange</li>
        <li>Send to your MetaMask address</li>
        <li>Keep extra for gas fees</li>
      </ol>
      
      <h2>Step 6: Participate in Presales</h2>
      <ol>
        <li>Visit the official presale website</li>
        <li>Click "Connect Wallet"</li>
        <li>Select MetaMask</li>
        <li>Approve the connection</li>
        <li>Enter investment amount</li>
        <li>Confirm transaction</li>
        <li>Wait for confirmation</li>
      </ol>
      
      <h2>Common Issues and Solutions</h2>
      <ul>
        <li><strong>Transaction Failed:</strong> Increase gas fees</li>
        <li><strong>Wrong Network:</strong> Switch to correct chain</li>
        <li><strong>Insufficient Funds:</strong> Add more crypto + gas</li>
        <li><strong>Connection Issues:</strong> Clear cache and reconnect</li>
      </ul>
      
      <h2>Security Best Practices</h2>
      <ul>
        <li>Only connect to verified presale sites</li>
        <li>Double-check URLs for phishing</li>
        <li>Never enter seed phrase on websites</li>
        <li>Use a separate wallet for presales</li>
        <li>Regularly update MetaMask</li>
      </ul>
    `,
    excerpt: "Step-by-step tutorial on setting up MetaMask wallet for participating in crypto presales. Includes security best practices and common mistakes to avoid.",
    category: "Tutorials",
    author: "Tech Team",
    authorBio: "Our technical team specializes in blockchain integration and wallet security.",
    date: "2025-01-06",
    lastModified: "2025-01-06",
    readTime: "10 min read",
    tags: ["metamask", "wallet", "tutorial", "setup", "security"],
    relatedPosts: [
      "hardware-wallets-for-presales",
      "gas-fees-optimization-guide",
      "multi-chain-wallet-setup"
    ]
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | CryptoLaunch Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    }
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "dateModified": post.lastModified,
    "publisher": {
      "@type": "Organization",
      "name": "CryptoLaunch",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/blog/${params.slug}`
    },
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "wordCount": post.content.split(' ').length
  }

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        type="article"
      />
      <JsonLd data={articleSchema} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${params.slug}` }
      ])} />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-blue-400">{post.category}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <span>By {post.author}</span>
            </div>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <Link 
              key={tag}
              href={`/blog/tag/${tag}`}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>

        {/* Author Bio */}
        <div className="crypto-card rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-white mb-2">About the Author</h3>
          <p className="text-gray-300">{post.authorBio}</p>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center space-x-4 mb-12">
          <span className="text-gray-400">Share:</span>
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </button>
        </div>

        {/* Related Posts */}
        <section className="border-t border-gray-800 pt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {post.relatedPosts.map((slug, index) => (
              <div key={index} className="crypto-card rounded-xl p-4 hover-lift">
                <h3 className="text-lg font-semibold text-white mb-2">
                  <Link href={`/blog/${slug}`} className="hover:text-blue-400 transition-colors">
                    {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Link>
                </h3>
                <Link href={`/blog/${slug}`} className="text-blue-400 text-sm hover:text-blue-300">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/20 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Get More Crypto Insights
          </h3>
          <p className="text-gray-300 mb-4">
            Subscribe to our newsletter for exclusive content and presale alerts
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-400"
            />
            <button className="crypto-gradient text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90">
              Subscribe
            </button>
          </form>
        </div>
      </article>
    </>
  )
}