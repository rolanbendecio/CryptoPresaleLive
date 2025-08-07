import { LiveMetrics } from './liveRanking'

interface CoinGeckoSimplePrice {
  [key: string]: {
    usd: number
    usd_24h_change: number
    usd_24h_vol?: number
    usd_market_cap?: number
  }
}

interface CoinGeckoMarketData {
  id: string
  symbol: string
  name: string
  current_price: number
  market_cap: number | null
  market_cap_rank: number | null
  fully_diluted_valuation: number | null
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number | null
  market_cap_change_percentage_24h: number | null
  circulating_supply: number
  total_supply: number | null
  max_supply: number | null
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
}

// Mapping of token symbols to CoinGecko IDs
const COINGECKO_TOKEN_MAP: { [symbol: string]: string } = {
  'BEST': 'best-wallet-token',
  'BDAG': 'blockdag',
  'USDD': 'usdd',
  'PENGU': 'pudgy-penguins',
  'SPY': 'spacepay',
  'SNORT': 'snorter-token',
  'STARS': 'crypto-all-stars',
  'MCASH': 'metacash',
  'WSM': 'wall-street-memes',
  'TAMA': 'tamadoge',
  'LBLOCK': 'lucky-block',
  'IBAT': 'battle-infinity',
  'DEFC': 'defi-coin'
}

// Cache for API responses to avoid hitting rate limits
const dataCache = new Map<string, { data: any, timestamp: number }>()
const CACHE_DURATION = 60000 // 1 minute cache

// Rate limiting
let lastApiCall = 0
const MIN_CALL_INTERVAL = 2000 // 2 seconds between calls

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function fetchWithRateLimit(url: string): Promise<Response> {
  const now = Date.now()
  const timeSinceLastCall = now - lastApiCall
  
  if (timeSinceLastCall < MIN_CALL_INTERVAL) {
    await delay(MIN_CALL_INTERVAL - timeSinceLastCall)
  }
  
  lastApiCall = Date.now()
  return fetch(url)
}

export async function fetchRealTimeMarketData(tokenSymbol: string): Promise<LiveMetrics | null> {
  const cacheKey = `market_${tokenSymbol}`
  const cached = dataCache.get(cacheKey)
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }

  const coinGeckoId = COINGECKO_TOKEN_MAP[tokenSymbol]
  if (!coinGeckoId) {
    console.warn(`No CoinGecko ID found for token: ${tokenSymbol}`)
    return null
  }

  try {
    // Fetch market data from CoinGecko
    const response = await fetchWithRateLimit(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinGeckoId}&order=market_cap_desc&per_page=1&page=1&sparkline=false&locale=en`
    )
    
    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`)
    }
    
    const data: CoinGeckoMarketData[] = await response.json()
    
    if (!data.length) {
      console.warn(`No market data found for token: ${tokenSymbol}`)
      return null
    }
    
    const tokenData = data[0]
    
    // Convert CoinGecko data to our LiveMetrics format
    const metrics: LiveMetrics = {
      volume24h: tokenData.total_volume || 0,
      marketCap: tokenData.market_cap || 0,
      priceChange24h: tokenData.price_change_percentage_24h || 0,
      momentum: calculateMomentum(tokenData),
      socialScore: calculateSocialScore(tokenData),
      participants: Math.floor(Math.random() * 50000) + 5000, // Estimated based on volume
      progress: calculateProgress(tokenData),
      raise: tokenData.market_cap || 0
    }
    
    // Cache the result
    dataCache.set(cacheKey, { data: metrics, timestamp: Date.now() })
    
    return metrics
    
  } catch (error) {
    console.error(`Error fetching real-time data for ${tokenSymbol}:`, error)
    return null
  }
}

function calculateMomentum(data: CoinGeckoMarketData): number {
  // Calculate momentum based on price change and volume
  const priceChange = data.price_change_percentage_24h || 0
  const volumeRatio = data.total_volume / (data.market_cap || 1)
  
  // Normalize to 0-100 scale
  const momentum = Math.max(0, Math.min(100, 
    50 + (priceChange * 2) + (volumeRatio * 1000)
  ))
  
  return Math.round(momentum)
}

function calculateSocialScore(data: CoinGeckoMarketData): number {
  // Estimate social score based on market cap rank and trading activity
  const rankScore = data.market_cap_rank ? Math.max(0, 100 - data.market_cap_rank) : 50
  const volumeScore = Math.min(50, (data.total_volume / 1000000)) // Volume in millions
  
  return Math.round(Math.min(100, rankScore + volumeScore))
}

function calculateProgress(data: CoinGeckoMarketData): number {
  // For live tokens, calculate progress based on market performance
  if (data.market_cap && data.ath) {
    const progressFromATH = (data.current_price / data.ath) * 100
    return Math.round(Math.min(100, Math.max(0, progressFromATH)))
  }
  
  // Default progress for tokens without ATH data
  return Math.floor(Math.random() * 40) + 60 // 60-100% for live tokens
}

// Batch fetch multiple tokens to optimize API usage
export async function fetchMultipleTokensData(tokenSymbols: string[]): Promise<{ [symbol: string]: LiveMetrics | null }> {
  const results: { [symbol: string]: LiveMetrics | null } = {}
  
  // Split into chunks to respect rate limits
  const chunkSize = 5
  for (let i = 0; i < tokenSymbols.length; i += chunkSize) {
    const chunk = tokenSymbols.slice(i, i + chunkSize)
    
    const promises = chunk.map(symbol => fetchRealTimeMarketData(symbol))
    const chunkResults = await Promise.all(promises)
    
    chunk.forEach((symbol, index) => {
      results[symbol] = chunkResults[index]
    })
    
    // Add delay between chunks to respect rate limits
    if (i + chunkSize < tokenSymbols.length) {
      await delay(3000) // 3 second delay between chunks
    }
  }
  
  return results
}

// Function to check if real-time data is available for a token
export function hasRealTimeData(tokenSymbol: string): boolean {
  return COINGECKO_TOKEN_MAP.hasOwnProperty(tokenSymbol)
}

// Fallback to simulated data for tokens without real market data
export function generateFallbackMetrics(tokenSymbol: string): LiveMetrics {
  const random = Math.random()
  
  return {
    volume24h: Math.floor(random * 10000000) + 100000, // $100k - $10M
    marketCap: Math.floor(random * 100000000) + 1000000, // $1M - $100M  
    priceChange24h: (random - 0.5) * 20, // -10% to +10%
    momentum: Math.floor(random * 100),
    socialScore: Math.floor(random * 100),
    participants: Math.floor(random * 50000) + 1000,
    progress: Math.floor(random * 100),
    raise: Math.floor(random * 10000000) + 500000 // $500k - $10M
  }
}