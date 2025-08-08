import React from 'react'
import SEO from '@/components/SEO'

export const metadata = {
  title: 'Privacy Policy - CryptoLaunch',
  description: 'Learn how CryptoLaunch collects, uses, and protects your personal information. Our commitment to data privacy and GDPR compliance.',
  keywords: 'privacy policy, data protection, GDPR, personal information, crypto platform privacy',
  openGraph: {
    title: 'Privacy Policy - CryptoLaunch',
    description: 'Our commitment to protecting your privacy and personal data on the CryptoLaunch platform.',
    type: 'website',
    url: 'https://yourdomain.com/privacy',
  }
}

export default function PrivacyPage() {
  return (
    <>
      <SEO 
        title="Privacy Policy - CryptoLaunch"
        description="Learn how we collect, use, and protect your personal information on CryptoLaunch."
        keywords="privacy policy, data protection, GDPR, personal information security"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 text-center">
            Privacy Policy
          </h1>
          
          <p className="text-gray-300 text-center mb-8">
            Last Updated: January 2025 | Effective Date: January 2025
          </p>

          <div className="crypto-card rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                At CryptoLaunch, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website and use our services. 
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                <li>Contact information (name, email address) when you contact us</li>
                <li>Feedback and correspondence sent to us</li>
                <li>Information provided when submitting a presale for listing</li>
                <li>Newsletter subscription information</li>
              </ul>

              <h3 className="text-lg font-semibold text-blue-400 mb-3">Information Collected Automatically</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our platform</li>
                <li>Referring website addresses</li>
                <li>Analytics data through cookies and similar technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Provide and maintain our services</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Improve our website and user experience</li>
                <li>Analyze usage patterns and trends</li>
                <li>Detect and prevent fraud or security issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze traffic and usage patterns</li>
                <li>Improve website performance</li>
                <li>Provide personalized content</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                You can control cookies through your browser settings. However, disabling cookies may limit 
                certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may share your information in the 
                following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>With service providers who assist in operating our platform</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With your consent or at your direction</li>
                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mt-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure data storage practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of 
                residence. These countries may have data protection laws different from your country. We ensure 
                appropriate safeguards are in place to protect your information in accordance with this privacy 
                policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                CryptoLaunch is not intended for use by individuals under the age of 18. We do not knowingly 
                collect personal information from children under 18. If we become aware that we have collected 
                personal information from a child under 18, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Third-Party Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website contains links to third-party websites and services. We are not responsible for the 
                privacy practices of these third parties. We encourage you to review their privacy policies before 
                providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in 
                this privacy policy, unless a longer retention period is required by law. When information is no 
                longer needed, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. GDPR Compliance</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For users in the European Economic Area (EEA), we process personal data in compliance with the 
                General Data Protection Regulation (GDPR). Our legal bases for processing include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Consent: When you have given explicit consent</li>
                <li>Contract: To fulfill our services to you</li>
                <li>Legal obligation: To comply with applicable laws</li>
                <li>Legitimate interests: To operate and improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. California Privacy Rights</h2>
              <p className="text-gray-300 leading-relaxed">
                California residents have additional rights under the California Consumer Privacy Act (CCPA), 
                including the right to know what personal information we collect, the right to delete personal 
                information, and the right to opt-out of the sale of personal information (which we do not do).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting 
                the new privacy policy on this page and updating the "Last Updated" date. We encourage you to 
                review this privacy policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions or concerns about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@cryptolaunch.com<br />
                  <strong>Contact Form:</strong> <a href="/contact" className="text-blue-400 hover:text-blue-300 underline">Contact Page</a><br />
                  <strong>Data Protection Officer:</strong> dpo@cryptolaunch.com
                </p>
              </div>
            </section>

            <section className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-sm text-center">
                This privacy policy is effective as of the date stated above. Your use of CryptoLaunch 
                constitutes acceptance of this privacy policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}