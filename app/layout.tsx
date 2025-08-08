import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'),
  title: {
    default: 'Best Crypto Presales 2025 | Top 50+ ICO List (Live) - CryptoLaunch',
    template: '%s | CryptoLaunch Presale Tracker'
  },
  description: 'Track 50+ vetted crypto presales & ICOs for January 2025. ✅ Live updates every hour ✅ Expert analysis ✅ APY up to 500% ✅ Join 25,000+ investors finding early gems daily.',
  keywords: ['best crypto presales 2025', 'top ICO list january 2025', 'live crypto presale tracker', 'new token launches today', 'cryptocurrency presale calendar', 'early crypto investments', 'presale launchpad 2025', 'upcoming ICO schedule', 'defi presale opportunities', 'meme coin presales'],
  authors: [{ name: 'CryptoLaunch Team' }],
  creator: 'CryptoLaunch',
  publisher: 'CryptoLaunch',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'CryptoLaunch',
    title: 'Best Crypto Presales January 2025 | 50+ Vetted ICOs (Updated Hourly)',
    description: '🚀 Real-time tracker: 50+ verified presales, expert ratings, tokenomics analysis. Average 127% returns last month. Free alerts for new launches.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CryptoLaunch - Crypto Presales Platform',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '50+ Best Crypto Presales Jan 2025 | Live Updates',
    description: 'Track vetted presales with expert analysis. 127% avg returns. Free alerts.',
    images: ['/twitter-image.png'],
    creator: '@cryptolaunch',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="App min-h-screen bg-gradient-to-br from-gray-900 via-crypto-dark to-gray-800">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}