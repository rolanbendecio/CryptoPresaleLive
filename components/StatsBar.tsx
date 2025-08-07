import React from 'react'

interface Post {
  raise: number | string
  apy: string
  status: string
}

interface StatsBarProps {
  posts: Post[]
}

const StatsBar: React.FC<StatsBarProps> = ({ posts }) => {
  const totalRaised = posts.reduce((sum, post) => {
    const raiseAmount = typeof post.raise === 'string' 
      ? parseFloat(post.raise.replace(/[$M,K]/g, '')) * (post.raise.includes('M') ? 1000000 : post.raise.includes('K') ? 1000 : 1)
      : post.raise || 0
    return sum + raiseAmount
  }, 0)

  const avgAPY = posts.reduce((sum, post) => {
    const apy = typeof post.apy === 'string' ? parseFloat(post.apy.replace('%', '')) : 0
    return sum + apy
  }, 0) / posts.length

  const livePresales = posts.filter(post => post.status === 'Live').length

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}K`
    } else {
      return `$${amount.toFixed(2)}`
    }
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-white mb-1">
            {posts.length}
          </div>
          <div className="text-sm text-gray-400">
            Total Presales
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
            {livePresales}
          </div>
          <div className="text-sm text-gray-400">
            Live Now
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
            {formatCurrency(totalRaised)}
          </div>
          <div className="text-sm text-gray-400">
            Total Raised
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
            {avgAPY.toFixed(1)}%
          </div>
          <div className="text-sm text-gray-400">
            Avg APY
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsBar