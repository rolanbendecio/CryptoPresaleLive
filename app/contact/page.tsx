'use client'

import React, { useState } from 'react'
import SEO from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import { generateOrganizationSchema, generateBreadcrumbSchema } from '@/lib/schemas'
import { seoConfig } from '@/lib/seo-config'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1000)
  }

  return (
    <>
      <SEO 
        title={seoConfig.pages.contact.title}
        description={seoConfig.pages.contact.description}
        keywords={seoConfig.pages.contact.keywords}
      />
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" }
      ])} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 text-center">
            Contact Us
          </h1>
          
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Have questions, suggestions, or want to list your presale? We're here to help.
          </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="crypto-card rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="listing">Submit Presale for Listing</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="bug">Report a Bug</option>
                      <option value="feedback">Feedback & Suggestions</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-400">
                      * Required fields
                    </p>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`crypto-gradient text-white px-8 py-3 rounded-lg font-medium transition-all ${
                        isSubmitting 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:opacity-90'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                      <p className="text-green-400 text-sm">
                        ✓ Your message has been sent successfully! We'll respond within 24-48 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
                      <p className="text-red-400 text-sm">
                        ✗ Failed to send message. Please try again or email us directly.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="crypto-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Quick Contact</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:support@cryptolaunch.com" className="text-blue-400 hover:text-blue-300">
                      support@cryptolaunch.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Response Time</p>
                    <p className="text-white">24-48 hours</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Office Hours</p>
                    <p className="text-white">Mon-Fri 9AM-6PM UTC</p>
                  </div>
                </div>
              </div>

              <div className="crypto-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                
                <div className="space-y-3">
                  <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                    <span className="text-xl">𝕏</span>
                    <span>Twitter/X</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                    <span className="text-xl">📱</span>
                    <span>Telegram</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                    <span className="text-xl">💬</span>
                    <span>Discord</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                    <span className="text-xl">📺</span>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

              <div className="crypto-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">For Projects</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Want to list your presale on CryptoLaunch? We carefully review all submissions.
                </p>
                <a
                  href="#"
                  className="block text-center crypto-gradient text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Submit Your Project
                </a>
              </div>
            </div>
          </div>

          <section className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
            <div className="crypto-card rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">List Your Presale</h3>
              <p className="text-gray-300 text-sm">
                Get your project in front of thousands of potential investors
              </p>
            </div>
            
            <div className="crypto-card rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-white mb-2">Partnership</h3>
              <p className="text-gray-300 text-sm">
                Explore partnership and advertising opportunities
              </p>
            </div>
            
            <div className="crypto-card rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-lg font-bold text-white mb-2">Feedback</h3>
              <p className="text-gray-300 text-sm">
                Help us improve with your suggestions and ideas
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}