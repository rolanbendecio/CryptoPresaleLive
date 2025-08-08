import React from 'react'
import SEO from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import { generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schemas'

export const metadata = {
  title: 'How It Works - Crypto Presale Investment Guide | CryptoLaunch',
  description: 'Learn how to invest in cryptocurrency presales safely. Step-by-step guide to discovering, analyzing, and participating in crypto presales through CryptoLaunch platform.',
  keywords: 'how to invest crypto presale, cryptocurrency presale guide, ICO investment tutorial, crypto presale steps, blockchain investment guide',
  openGraph: {
    title: 'How to Invest in Crypto Presales - Complete Guide',
    description: 'Step-by-step guide to discovering and investing in the best cryptocurrency presales through CryptoLaunch.',
    type: 'article',
    url: 'https://yourdomain.com/how-it-works',
  }
}

export default function HowItWorksPage() {
  return (
    <>
      <SEO 
        title="How It Works - Crypto Presale Investment Guide"
        description="Step-by-step guide to discovering, analyzing, and investing in cryptocurrency presales safely through CryptoLaunch."
        keywords="how to invest crypto presale, cryptocurrency guide, ICO investment, presale tutorial"
      />
      <JsonLd data={generateHowToSchema()} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "How It Works", url: "/how-it-works" }
      ])} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 text-center">
            How It Works
          </h1>
          
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Your journey to successful crypto presale investments starts here. Follow our simple 5-step process 
            to discover and invest in the next big cryptocurrency projects.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="crypto-card rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 crypto-gradient rounded-full flex items-center justify-center text-white font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Browse Presales</h3>
                <p className="text-gray-300 text-sm">
                  Explore our curated list of active and upcoming presales. Use filters to find projects 
                  that match your investment criteria and risk tolerance.
                </p>
              </div>

              <div className="crypto-card rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 crypto-gradient rounded-full flex items-center justify-center text-white font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Analyze Projects</h3>
                <p className="text-gray-300 text-sm">
                  Review detailed information including tokenomics, roadmaps, team backgrounds, and real-time 
                  market data to make informed decisions.
                </p>
              </div>

              <div className="crypto-card rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 crypto-gradient rounded-full flex items-center justify-center text-white font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Check Live Metrics</h3>
                <p className="text-gray-300 text-sm">
                  Monitor real-time price changes, trading volume, and momentum indicators updated every 
                  8 seconds via CoinGecko API integration.
                </p>
              </div>

              <div className="crypto-card rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 crypto-gradient rounded-full flex items-center justify-center text-white font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Connect Wallet</h3>
                <p className="text-gray-300 text-sm">
                  Set up a compatible crypto wallet like MetaMask or Trust Wallet. Ensure you have the 
                  required cryptocurrency (ETH, BNB, etc.) for participation.
                </p>
              </div>

              <div className="crypto-card rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 crypto-gradient rounded-full flex items-center justify-center text-white font-bold mb-4">
                  5
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Invest Securely</h3>
                <p className="text-gray-300 text-sm">
                  Click "Buy Now" to access the official presale platform. Follow their instructions to 
                  complete your investment securely.
                </p>
              </div>

              <div className="crypto-card rounded-xl p-6 hover-lift">
                <div className="w-12 h-12 crypto-gradient rounded-full flex items-center justify-center text-white font-bold mb-4">
                  6
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Track Progress</h3>
                <p className="text-gray-300 text-sm">
                  Monitor your investments and presale progress. Stay updated with milestone achievements 
                  and token distribution schedules.
                </p>
              </div>
            </div>

            <section className="crypto-card rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Understanding Presale Types</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Private Sale</h3>
                  <p className="text-gray-300 text-sm">
                    Early-stage funding round with minimum investment requirements. Usually offers the best 
                    token prices but requires larger capital and may have vesting periods.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-6">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Public Presale</h3>
                  <p className="text-gray-300 text-sm">
                    Open to all investors with lower minimum investments. Tokens are typically priced higher 
                    than private sales but lower than the listing price.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-6">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">IDO (Initial DEX Offering)</h3>
                  <p className="text-gray-300 text-sm">
                    Launches directly on decentralized exchanges. Provides immediate liquidity and trading 
                    but can be highly competitive to participate in.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">IEO (Initial Exchange Offering)</h3>
                  <p className="text-gray-300 text-sm">
                    Conducted on centralized exchanges with KYC requirements. Offers more security but 
                    requires exchange account verification.
                  </p>
                </div>
              </div>
            </section>

            <section className="crypto-card rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Investment Best Practices</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Do's</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>✅ Research project fundamentals thoroughly</li>
                    <li>✅ Verify team credentials and partnerships</li>
                    <li>✅ Read the whitepaper and tokenomics</li>
                    <li>✅ Start with small investments to test</li>
                    <li>✅ Use secure wallets and enable 2FA</li>
                    <li>✅ Keep track of vesting schedules</li>
                    <li>✅ Diversify across multiple projects</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-3">Don'ts</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>❌ Invest more than you can afford to lose</li>
                    <li>❌ FOMO into projects without research</li>
                    <li>❌ Share private keys or seed phrases</li>
                    <li>❌ Ignore red flags and warning signs</li>
                    <li>❌ Send funds to unverified addresses</li>
                    <li>❌ Expect guaranteed returns</li>
                    <li>❌ Skip reading terms and conditions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="crypto-card rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Required Tools & Resources</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Wallets</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• MetaMask</li>
                    <li>• Trust Wallet</li>
                    <li>• Coinbase Wallet</li>
                    <li>• WalletConnect</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Cryptocurrencies</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• ETH (Ethereum)</li>
                    <li>• BNB (Binance)</li>
                    <li>• USDT/USDC</li>
                    <li>• SOL (Solana)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Research Tools</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• CoinGecko</li>
                    <li>• Etherscan</li>
                    <li>• DexTools</li>
                    <li>• Token Sniffer</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Investing?</h2>
              <p className="text-gray-300 mb-6">
                Browse our carefully selected presales and find your next investment opportunity. 
                Remember to always do your own research and invest responsibly.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/"
                  className="crypto-gradient text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  View Live Presales
                </a>
                <a
                  href="/faq"
                  className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Read FAQ
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}