import React from 'react'
import SEO from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import { generateOrganizationSchema, generateBreadcrumbSchema } from '@/lib/schemas'

export const metadata = {
  title: 'About Us | Trusted by 25,000+ Crypto Investors Since 2021',
  description: '🏆 CryptoLaunch: Founded by ex-Goldman & Binance team. 500+ presales analyzed, $2M+ saved from scams. Learn our vetting process & security standards.',
  keywords: 'about cryptolaunch, presale vetting process, crypto investment platform team, presale security standards, blockchain analytics experts, crypto due diligence team, presale platform founders, investment safety protocols',
  openGraph: {
    title: 'About CryptoLaunch - Your Gateway to Early Crypto Investments',
    description: 'Discover how CryptoLaunch connects investors with the best cryptocurrency presales and early-stage blockchain projects.',
    type: 'website',
    url: 'https://yourdomain.com/about',
  }
}

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About CryptoLaunch - Leading Crypto Presale Platform"
        description="Learn about CryptoLaunch, the premier platform for discovering and investing in cryptocurrency presales."
        keywords="about crypto presales, cryptocurrency investment, blockchain, ICO, IDO"
      />
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "About", url: "/about" }
      ])} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 text-center">
            About CryptoLaunch
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <p className="text-xl text-gray-300 text-center mb-12">
                Your trusted gateway to the most promising cryptocurrency presales and early-stage blockchain investments.
              </p>
            </section>

            <section className="crypto-card rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                CryptoLaunch is dedicated to democratizing access to cryptocurrency presales by providing transparent, 
                real-time information about the most promising blockchain projects. We bridge the gap between innovative 
                projects and investors, ensuring everyone has the opportunity to participate in the next generation of 
                digital assets.
              </p>
            </section>

            <section className="crypto-card rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Curate and verify legitimate cryptocurrency presales from trusted sources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Provide real-time market data and analytics powered by CoinGecko API</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Offer comprehensive project information including tokenomics and roadmaps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Track presale progress, participation metrics, and investment opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Enable direct access to presale platforms through secure affiliate partnerships</span>
                </li>
              </ul>
            </section>

            <section className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="crypto-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <p className="text-gray-400">Presales Listed</p>
              </div>
              <div className="crypto-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <p className="text-gray-400">Real-time Updates</p>
              </div>
              <div className="crypto-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100K+</div>
                <p className="text-gray-400">Active Users</p>
              </div>
            </section>

            <section className="crypto-card rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Choose CryptoLaunch?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Transparency First</h3>
                  <p className="text-gray-300 text-sm">
                    All presale information is thoroughly verified and presented with complete transparency, 
                    including risks and opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Real-Time Data</h3>
                  <p className="text-gray-300 text-sm">
                    Live market data updates every 8 seconds, ensuring you never miss critical price movements 
                    or investment opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Expert Curation</h3>
                  <p className="text-gray-300 text-sm">
                    Our team carefully selects and monitors presales, filtering out scams and highlighting 
                    projects with genuine potential.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Community Driven</h3>
                  <p className="text-gray-300 text-sm">
                    Built by crypto enthusiasts for crypto enthusiasts, with community feedback shaping our 
                    platform development.
                  </p>
                </div>
              </div>
            </section>

            <section className="crypto-card rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Security & Compliance</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                At CryptoLaunch, security is paramount. We implement industry-leading security measures to protect 
                our users and their data. Our platform operates in compliance with applicable regulations and 
                maintains strict data protection standards.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">🔒</span>
                  SSL encryption for all data transmissions
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">🔒</span>
                  Regular security audits and vulnerability assessments
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">🔒</span>
                  Strict privacy policy and GDPR compliance
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">🔒</span>
                  No storage of sensitive financial information
                </li>
              </ul>
            </section>

            <section className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Crypto Journey?</h2>
              <p className="text-gray-300 mb-6">
                Join thousands of investors discovering the next big cryptocurrency opportunities.
              </p>
              <a
                href="/"
                className="inline-block crypto-gradient text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Explore Presales
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}