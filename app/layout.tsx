import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CryptoLaunch - Live Crypto Presales',
  description: 'Discover the hottest cryptocurrency presales with real-time updates and exclusive access. Track live prices, analyze performance, and never miss an opportunity.',
  keywords: ['crypto presales', 'cryptocurrency', 'presale', 'ICO', 'IDO', 'crypto investment', 'blockchain', 'live prices'],
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