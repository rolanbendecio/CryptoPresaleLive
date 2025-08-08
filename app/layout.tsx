import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'),
  title: {
    default: 'CryptoLaunch - Live Crypto Presales Tracker & Investment Platform',
    template: '%s | CryptoLaunch'
  },
  description: 'Discover and invest in the best cryptocurrency presales. Real-time tracking, market data, and analysis for ICOs, IDOs, and token launches. Your gateway to early crypto investments.',
  keywords: ['crypto presales', 'cryptocurrency', 'ICO', 'IDO', 'token sale', 'blockchain investment', 'crypto tracker', 'presale platform', 'early investment', 'defi presale'],
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
    title: 'CryptoLaunch - Live Crypto Presales Tracker',
    description: 'Discover and invest in the best cryptocurrency presales with real-time data and analysis.',
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
    title: 'CryptoLaunch - Live Crypto Presales Tracker',
    description: 'Discover the best cryptocurrency presales with real-time tracking and analysis.',
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