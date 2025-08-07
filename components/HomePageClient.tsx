'use client'

import React, { useState, useEffect } from 'react'
import PresaleCard from '@/components/PresaleCard'
import StatsBar from '@/components/StatsBar'
import { updateRankings, PresaleWithRanking } from '@/lib/liveRanking'

interface PresaleData {
  title: string
  symbol: string
  description: string
  status: string
  raise: number | string
  apy: string
  affiliateLink: string
  slug: string
  date: string
  category?: string
  progress?: number
  participants?: number
  endDate?: string
}

interface HomePageClientProps {
  initialPosts: PresaleData[]
}

export default function HomePageClient({ initialPosts }: HomePageClientProps) {
  const [filter, setFilter] = useState('All')
  const [posts, setPosts] = useState<PresaleWithRanking[]>(initialPosts as PresaleWithRanking[])
  const [isLive, setIsLive] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [isUpdating, setIsUpdating] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)

  // Live ranking updates every 8 seconds with real-time data
  useEffect(() => {
    if (!isLive) return

    const updateData = async () => {
      setIsUpdating(true)
      setApiError(null)
      
      try {
        const currentPosts = posts
        const updatedPosts = await updateRankings([...currentPosts])
        setPosts(updatedPosts)
        setLastUpdate(new Date())
      } catch (error) {
        console.error('Error updating rankings:', error)
        setApiError('Failed to update real-time data. Using cached values.')
      } finally {
        setIsUpdating(false)
      }
    }

    const interval = setInterval(updateData, 8000) // Update every 8 seconds

    // Initial update
    updateData()

    return () => clearInterval(interval)
  }, [isLive])

  const filteredPosts = posts.filter((post: any) => {
    if (filter === 'All') return true
    return post.status === filter
  })

  const filters = ['All', 'Live', 'Upcoming', 'Ended']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="presales">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in">
          Discover the Next Big Crypto
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up">
          Get early access to the most promising cryptocurrency presales. 
          Track live prices, analyze performance, and never miss an opportunity.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className={`font-medium ${isLive ? 'text-green-400' : 'text-gray-400'}`}>
              {isLive ? '● LIVE' : '○ PAUSED'}
            </span>
            <span className="text-gray-400">Real-time market data from CoinGecko API</span>
            {isUpdating && (
              <span className="text-blue-400 text-xs animate-pulse">🔄 Fetching...</span>
            )}
          </div>
          <button
            onClick={() => setIsLive(!isLive)}
            className="text-xs px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-300"
          >
            {isLive ? 'Pause' : 'Resume'} Live Updates
          </button>
        </div>
        {apiError && (
          <div className="mt-4 text-center">
            <p className="text-yellow-400 text-sm">⚠️ {apiError}</p>
          </div>
        )}
      </div>

      {/* Stats Bar */}
      <StatsBar posts={posts} />

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map(filterOption => (
          <button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === filterOption 
                ? 'crypto-gradient text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {filterOption}
            {filterOption !== 'All' && (
              <span className="ml-2 text-xs opacity-75">
                ({posts.filter((p: any) => p.status === filterOption).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Presales Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg mb-4">
            No presales found{filter !== 'All' ? ` with status "${filter}"` : ''}.
          </p>
          <button 
            onClick={() => setFilter('All')}
            className="text-blue-400 hover:text-blue-300 underline"
          >
            View all presales
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredPosts.map((post: PresaleWithRanking, index: number) => (
            <PresaleCard 
              key={post.slug || index} 
              presale={post} 
              index={post.currentRank ? post.currentRank - 1 : index}
              showRankChange={true}
            />
          ))}
        </div>
      )}

      {/* Last Updated */}
      <div className="text-center mt-12 pt-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          Last updated: {lastUpdate.toLocaleTimeString()} • 
          <span className={`ml-2 ${isLive ? 'text-green-400' : 'text-gray-400'}`}>
            {isLive ? 'Real-time API data active' : 'Live updates paused'}
          </span>
          {isUpdating && (
            <span className="ml-2 text-blue-400 animate-pulse">🔄 Fetching from CoinGecko...</span>
          )}
        </p>
        <p className="text-gray-600 text-xs mt-1">
          Market data powered by CoinGecko API • Updates every 8 seconds
        </p>
      </div>
    </div>
  )
}