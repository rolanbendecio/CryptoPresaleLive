'use client'

import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold gradient-text">
                🚀 CryptoLaunch
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <a
                href="#presales"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Presales
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </a>
            </nav>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400">Live</span>
              <div className="w-2 h-2 bg-green-400 rounded-full pulse-dot"></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header