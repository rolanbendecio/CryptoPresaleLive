// Live ranking system for crypto presales
export interface LiveMetrics {
  volume24h: number
  marketCap: number
  priceChange24h: number
  momentum: number
  socialScore: number
  participants: number
  progress: number
  raise: number
}

export interface PresaleWithRanking {
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
  liveMetrics?: LiveMetrics
  rankScore?: number
  previousRank?: number
  currentRank?: number
  rankChange?: 'up' | 'down' | 'same'
}

// Simulate live data changes
export function generateLiveMetrics(baseMetrics?: Partial<LiveMetrics>): LiveMetrics {
  const variation = () => (Math.random() - 0.5) * 0.2 // ±10% variation
  
  return {
    volume24h: baseMetrics?.volume24h || Math.random() * 5000000,
    marketCap: baseMetrics?.marketCap || Math.random() * 100000000,
    priceChange24h: (baseMetrics?.priceChange24h || 0) + variation() * 20,
    momentum: Math.max(0, Math.min(100, (baseMetrics?.momentum || 50) + variation() * 30)),
    socialScore: Math.max(0, Math.min(100, (baseMetrics?.socialScore || 50) + variation() * 20)),
    participants: Math.floor((baseMetrics?.participants || 10000) * (1 + variation())),
    progress: Math.max(0, Math.min(100, (baseMetrics?.progress || 50) + variation() * 10)),
    raise: (baseMetrics?.raise || 1000000) * (1 + variation())
  }
}

// Calculate ranking score based on multiple factors
export function calculateRankScore(metrics: LiveMetrics, status: string): number {
  let score = 0
  
  // Volume weight (30%)
  score += (metrics.volume24h / 10000000) * 30
  
  // Market cap weight (25%)
  score += (metrics.marketCap / 100000000) * 25
  
  // Price change weight (20%)
  score += Math.max(0, metrics.priceChange24h) * 0.5
  
  // Momentum weight (15%)
  score += (metrics.momentum / 100) * 15
  
  // Social score weight (10%)
  score += (metrics.socialScore / 100) * 10
  
  // Status bonus
  if (status === 'Live') score *= 1.2
  else if (status === 'Upcoming') score *= 1.0
  else if (status === 'Ended') score *= 0.8
  
  // Progress bonus for active presales
  if (metrics.progress > 0) {
    score += (metrics.progress / 100) * 5
  }
  
  return Math.max(0, score)
}

// Update rankings and track position changes
export function updateRankings(presales: PresaleWithRanking[]): PresaleWithRanking[] {
  // Store previous ranks
  presales.forEach((presale, index) => {
    presale.previousRank = presale.currentRank || index + 1
  })
  
  // Update live metrics for each presale
  const updatedPresales = presales.map(presale => {
    const currentMetrics = presale.liveMetrics || generateLiveMetrics({
      volume24h: Math.random() * 5000000,
      marketCap: Math.random() * 100000000,
      priceChange24h: (Math.random() - 0.5) * 40,
      momentum: Math.random() * 100,
      socialScore: Math.random() * 100,
      participants: presale.participants || Math.floor(Math.random() * 50000),
      progress: presale.progress || Math.random() * 100,
      raise: typeof presale.raise === 'string' ? 
        parseFloat(presale.raise.replace(/[$,]/g, '')) : 
        presale.raise
    })
    
    // Add some realistic variation
    const newMetrics = generateLiveMetrics(currentMetrics)
    const rankScore = calculateRankScore(newMetrics, presale.status)
    
    return {
      ...presale,
      liveMetrics: newMetrics,
      rankScore
    }
  })
  
  // Sort by rank score (descending)
  const sortedPresales = updatedPresales.sort((a, b) => (b.rankScore || 0) - (a.rankScore || 0))
  
  // Update current ranks and calculate changes
  return sortedPresales.map((presale, index) => {
    const newRank = index + 1
    const prevRank = presale.previousRank || newRank
    
    let rankChange: 'up' | 'down' | 'same' = 'same'
    if (newRank < prevRank) rankChange = 'up'
    else if (newRank > prevRank) rankChange = 'down'
    
    return {
      ...presale,
      currentRank: newRank,
      rankChange
    }
  })
}

// Format numbers for display
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  }
  return num.toFixed(0)
}

export function formatCurrency(num: number): string {
  return `$${formatNumber(num)}`
}

export function formatPercentage(num: number): string {
  const sign = num >= 0 ? '+' : ''
  return `${sign}${num.toFixed(1)}%`
}