'use client'

import React from 'react'
import Link from 'next/link'
import { PresaleWithRanking, formatCurrency, formatPercentage } from '@/lib/liveRanking'

interface PresaleCardProps {
  presale: PresaleWithRanking
  index: number
  showRankChange?: boolean
}

const PresaleCard: React.FC<PresaleCardProps> = ({ presale, index, showRankChange = false }) => {
  const formatCurrency = (amount: number | string) => {
    if (typeof amount === 'string') {
      return amount
    }
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}K`
    } else {
      return `$${amount.toFixed(2)}`
    }
  }

  const getStatusBadge = (status: string) => {
    const statusStyles: Record<string, string> = {
      'Live': 'bg-green-500 text-white',
      'Upcoming': 'bg-yellow-500 text-white', 
      'Ended': 'bg-red-500 text-white',
      'Paused': 'bg-gray-500 text-white'
    }
    
    return statusStyles[status] || 'bg-gray-500 text-white'
  }

  const getAPYColor = (apy: string) => {
    if (typeof apy === 'string') {
      const num = parseFloat(apy.replace('%', ''))
      if (num >= 50) return 'text-green-400'
      if (num >= 25) return 'text-yellow-400'
      return 'text-orange-400'
    }
    return 'text-gray-400'
  }

  const getRankChangeIcon = () => {
    if (!showRankChange || !presale.rankChange) return null
    
    switch (presale.rankChange) {
      case 'up':
        return <span className="text-green-400 text-xs ml-1">↑</span>
      case 'down':
        return <span className="text-red-400 text-xs ml-1">↓</span>
      default:
        return <span className="text-gray-400 text-xs ml-1">—</span>
    }
  }

  const getLiveMetrics = () => {
    if (!presale.liveMetrics) return null
    
    return {
      volume: formatCurrency(presale.liveMetrics.volume24h),
      marketCap: formatCurrency(presale.liveMetrics.marketCap),
      priceChange: formatPercentage(presale.liveMetrics.priceChange24h),
      momentum: Math.round(presale.liveMetrics.momentum)
    }
  }

  const metrics = getLiveMetrics()

  return (
    <div className={`crypto-card rounded-xl p-6 hover-lift transition-all duration-500 ${presale.rankChange === 'up' ? 'ring-2 ring-green-400/30' : presale.rankChange === 'down' ? 'ring-2 ring-red-400/30' : ''}`}>
      {/* Header with rank and status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300 ${
            presale.rankChange === 'up' ? 'bg-green-500' : 
            presale.rankChange === 'down' ? 'bg-red-500' : 
            'crypto-gradient'
          }`}>
            {presale.currentRank || index + 1}
            {getRankChangeIcon()}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{presale.title}</h3>
            <p className="text-sm text-gray-400">{presale.symbol}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(presale.status)}`}>
          {presale.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
        {presale.description}
      </p>

      {/* Live Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-800/50 rounded-lg p-3">
          <p className="text-xs text-gray-400">24h Volume</p>
          <p className="text-sm font-semibold text-white">
            {metrics?.volume || formatCurrency(presale.raise)}
          </p>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-3">
          <p className="text-xs text-gray-400">Price Change</p>
          <p className={`text-sm font-semibold ${
            metrics && presale.liveMetrics?.priceChange24h ? 
            (presale.liveMetrics.priceChange24h >= 0 ? 'text-green-400' : 'text-red-400') :
            getAPYColor(presale.apy)
          }`}>
            {metrics?.priceChange || presale.apy}
          </p>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-3">
          <p className="text-xs text-gray-400">Market Cap</p>
          <p className="text-sm font-semibold text-blue-400">
            {metrics?.marketCap || 'TBA'}
          </p>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-3">
          <p className="text-xs text-gray-400">Momentum</p>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${metrics && metrics.momentum > 70 ? 'bg-green-400' : metrics && metrics.momentum > 40 ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
            <p className="text-sm font-semibold text-white">
              {metrics?.momentum || 'N/A'}
            </p>
          </div>
        </div>
      </div>

      {/* Progress bar if available */}
      {presale.progress && (
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Progress</span>
            <span>{presale.progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="crypto-gradient h-2 rounded-full transition-all duration-300" 
              style={{ width: `${presale.progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex space-x-2">
        <a
          href={presale.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 crypto-gradient text-white text-center py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          🚀 Buy Now
        </a>
        <Link
          href={`/presale/${presale.slug}`}
          className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Details
        </Link>
      </div>

      {/* Date */}
      <div className="mt-3 pt-3 border-t border-gray-700">
        <p className="text-xs text-gray-500">
          Updated: {new Date(presale.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}

export default PresaleCard