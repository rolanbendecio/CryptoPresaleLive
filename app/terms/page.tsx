import React from 'react'
import SEO from '@/components/SEO'

export const metadata = {
  title: 'Terms of Service | Legal Agreement - CryptoLaunch',
  description: 'Terms of service for CryptoLaunch platform. User rights, investment disclaimers, platform usage rules. Last updated January 2025. DYOR policy applies.',
  keywords: 'cryptolaunch terms of service, presale platform legal terms, crypto investment disclaimer, user agreement 2025, presale platform rules, investment risk disclosure',
  openGraph: {
    title: 'Terms of Service - CryptoLaunch',
    description: 'Terms and conditions for using the CryptoLaunch crypto presale platform.',
    type: 'website',
    url: 'https://yourdomain.com/terms',
  }
}

export default function TermsPage() {
  return (
    <>
      <SEO 
        title="Terms of Service - CryptoLaunch"
        description="Terms and conditions for using the CryptoLaunch crypto presale platform."
        keywords="terms of service, user agreement, legal terms, crypto platform rules"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 text-center">
            Terms of Service
          </h1>
          
          <p className="text-gray-300 text-center mb-8">
            Last Updated: January 2025
          </p>

          <div className="crypto-card rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using CryptoLaunch ("the Platform"), you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services. We reserve the right to modify 
                these terms at any time, and your continued use constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                CryptoLaunch provides information about cryptocurrency presales, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Presale project listings and descriptions</li>
                <li>Market data and analytics</li>
                <li>Links to third-party presale platforms</li>
                <li>Educational content about cryptocurrency investments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Not Financial Advice</h2>
              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 mb-4">
                <p className="text-yellow-400 font-semibold">⚠️ Important Disclaimer</p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The information provided on CryptoLaunch is for informational purposes only and should not be 
                construed as financial, investment, legal, or tax advice. We do not recommend or endorse any 
                specific cryptocurrency, presale, or investment strategy. Always conduct your own research and 
                consult with qualified professionals before making investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Risk Acknowledgment</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By using our platform, you acknowledge and accept that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Cryptocurrency investments are highly volatile and risky</li>
                <li>You may lose all invested capital</li>
                <li>Past performance does not guarantee future results</li>
                <li>Presale projects may fail or be fraudulent</li>
                <li>Regulatory changes may affect investments</li>
                <li>Technical issues or hacks may result in losses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a user of CryptoLaunch, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Provide accurate information when using our services</li>
                <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                <li>Not use the platform for illegal or fraudulent activities</li>
                <li>Not attempt to hack, disrupt, or damage our services</li>
                <li>Not scrape or harvest data without permission</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Links</h2>
              <p className="text-gray-300 leading-relaxed">
                CryptoLaunch contains links to third-party websites and presale platforms. We are not responsible 
                for the content, accuracy, or practices of these external sites. Your interactions with third-party 
                platforms are governed by their own terms and policies. We recommend reviewing their terms before 
                engaging with any external services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All content on CryptoLaunch, including text, graphics, logos, and software, is the property of 
                CryptoLaunch or its content suppliers and is protected by intellectual property laws. You may not 
                reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Privacy and Data Protection</h2>
              <p className="text-gray-300 leading-relaxed">
                Your use of CryptoLaunch is also governed by our Privacy Policy. We are committed to protecting 
                your personal information and complying with applicable data protection regulations. Please review 
                our Privacy Policy to understand how we collect, use, and protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                To the maximum extent permitted by law, CryptoLaunch and its affiliates shall not be liable for 
                any indirect, incidental, special, consequential, or punitive damages, including loss of profits, 
                data, or other intangible losses resulting from your use of our services, even if we have been 
                advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify and hold harmless CryptoLaunch, its affiliates, and their respective 
                officers, directors, employees, and agents from any claims, damages, losses, liabilities, and 
                expenses arising from your use of the platform or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to terminate or suspend your access to CryptoLaunch at any time, without 
                notice, for any reason, including violation of these terms. Upon termination, all provisions of 
                these terms which by their nature should survive termination shall continue to apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the 
                jurisdiction in which CryptoLaunch operates, without regard to conflict of law principles. Any 
                disputes arising from these terms shall be resolved through binding arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-blue-400 mt-2">
                Email: legal@cryptolaunch.com<br />
                Contact Form: <a href="/contact" className="underline hover:text-blue-300">Contact Page</a>
              </p>
            </section>

            <section className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-sm text-center">
                By using CryptoLaunch, you acknowledge that you have read, understood, and agree to be bound 
                by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}