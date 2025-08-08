'use client'

import React, { useState } from 'react'
import SEO from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schemas'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    category: "General",
    question: "What is CryptoLaunch?",
    answer: "CryptoLaunch is a comprehensive platform that aggregates and tracks cryptocurrency presales, providing real-time data, analysis, and direct access to investment opportunities in early-stage blockchain projects."
  },
  {
    category: "General",
    question: "Is CryptoLaunch free to use?",
    answer: "Yes, CryptoLaunch is completely free to use. We provide all presale information, real-time data, and analysis tools at no cost to our users. We sustain our platform through affiliate partnerships with presale projects."
  },
  {
    category: "Investment",
    question: "What is a crypto presale?",
    answer: "A crypto presale is an early funding round where tokens are sold to investors before the official public launch. Presales typically offer tokens at discounted prices compared to the planned listing price, providing early investors with potential upside."
  },
  {
    category: "Investment",
    question: "How much should I invest in presales?",
    answer: "Only invest what you can afford to lose. Crypto presales are high-risk investments. We recommend starting with small amounts, diversifying across multiple projects, and never investing more than 5-10% of your portfolio in presales."
  },
  {
    category: "Investment",
    question: "What are the risks of presale investments?",
    answer: "Presale investments carry significant risks including: total loss of capital, project failure, team abandonment, smart contract vulnerabilities, regulatory changes, market volatility, and potential scams. Always conduct thorough research before investing."
  },
  {
    category: "Platform",
    question: "How do you select which presales to list?",
    answer: "Our team conducts due diligence on each project, evaluating factors such as team credentials, project viability, tokenomics, community engagement, and technical implementation. We aim to list only legitimate projects while filtering out obvious scams."
  },
  {
    category: "Platform",
    question: "How often is the data updated?",
    answer: "Our platform fetches real-time market data from CoinGecko API every 8 seconds for supported tokens. Presale information and progress metrics are updated multiple times daily to ensure accuracy."
  },
  {
    category: "Platform",
    question: "Can I submit a presale for listing?",
    answer: "Yes, project teams can submit their presales for review through our contact form. Please provide comprehensive project information including whitepaper, team details, tokenomics, and audit reports for consideration."
  },
  {
    category: "Security",
    question: "Is it safe to connect my wallet?",
    answer: "CryptoLaunch never asks for your private keys or seed phrases. When you click 'Buy Now', you're redirected to the official presale platform where you can safely connect your wallet. Always verify the URL before connecting."
  },
  {
    category: "Security",
    question: "How can I verify a presale is legitimate?",
    answer: "Check for: verified team members with real LinkedIn/social profiles, comprehensive whitepaper, smart contract audits, active community, clear roadmap, realistic tokenomics, and transparent fund usage. Be wary of anonymous teams and unrealistic promises."
  },
  {
    category: "Security",
    question: "What wallet should I use?",
    answer: "We recommend using established wallets like MetaMask, Trust Wallet, or Coinbase Wallet. Always download wallets from official sources, enable all security features, and never share your seed phrase with anyone."
  },
  {
    category: "Technical",
    question: "What blockchain networks are supported?",
    answer: "Most presales operate on Ethereum, Binance Smart Chain, Polygon, or Solana. Each presale listing specifies its blockchain network. Ensure you have the correct network configured in your wallet and sufficient native tokens for gas fees."
  },
  {
    category: "Technical",
    question: "What are gas fees?",
    answer: "Gas fees are transaction costs paid to blockchain validators. They vary by network and congestion levels. Ethereum typically has higher fees ($20-100+), while BSC and Polygon have lower fees ($0.10-5). Always keep extra funds for gas."
  },
  {
    category: "Technical",
    question: "When will I receive my tokens?",
    answer: "Token distribution varies by project. Some distribute immediately after presale ends, others have vesting schedules spanning months or years. Check each project's tokenomics and distribution schedule before investing."
  },
  {
    category: "Legal",
    question: "Are crypto presales legal?",
    answer: "Legality varies by jurisdiction. Some countries restrict or prohibit crypto investments. It's your responsibility to understand and comply with your local laws. Consider consulting a legal or tax professional for guidance."
  },
  {
    category: "Legal",
    question: "Do I need to pay taxes on presale gains?",
    answer: "In most jurisdictions, cryptocurrency gains are taxable events. Tax treatment varies by country and your specific situation. Keep detailed records of all transactions and consult a tax professional for advice."
  }
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openItems, setOpenItems] = useState<number[]>([])

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))]
  
  const filteredFAQs = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory)

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions | CryptoLaunch"
        description="Find answers to common questions about crypto presales, investment strategies, security, and using the CryptoLaunch platform."
        keywords="crypto presale FAQ, cryptocurrency investment questions, ICO FAQ, presale guide, blockchain investment help"
      />
      <JsonLd data={generateFAQSchema(faqData)} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "FAQ", url: "/faq" }
      ])} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 text-center">
            Frequently Asked Questions
          </h1>
          
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to know about crypto presales and using CryptoLaunch platform
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category 
                      ? 'crypto-gradient text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredFAQs.map((item, index) => {
                const globalIndex = faqData.indexOf(item)
                const isOpen = openItems.includes(globalIndex)
                
                return (
                  <div 
                    key={globalIndex}
                    className="crypto-card rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-400 text-sm font-medium">
                          {item.category}
                        </span>
                        <h3 className="text-white font-medium">
                          {item.question}
                        </h3>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-4 border-t border-gray-700">
                        <p className="text-gray-300 mt-4 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <section className="mt-12 crypto-card rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-gray-300 mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="crypto-gradient text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Contact Support
                </a>
                <a
                  href="/how-it-works"
                  className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  How It Works
                </a>
              </div>
            </section>

            <section className="mt-8 bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-6">
              <h3 className="text-yellow-400 font-bold mb-2 flex items-center">
                ⚠️ Risk Disclaimer
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Cryptocurrency investments are highly speculative and involve substantial risk. 
                Past performance does not guarantee future results. Never invest money you cannot 
                afford to lose. CryptoLaunch provides information only and is not financial advice. 
                Always conduct your own research and consult with qualified advisors before making 
                investment decisions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}