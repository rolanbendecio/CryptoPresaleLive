import React from 'react';
import { Link } from 'react-router-dom';

const PresaleCard = ({ presale, index }) => {
  const formatCurrency = (amount) => {
    if (typeof amount === 'string') {
      return amount;
    }
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}K`;
    } else {
      return `$${amount.toFixed(2)}`;
    }
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Live': 'bg-green-500 text-white',
      'Upcoming': 'bg-yellow-500 text-white', 
      'Ended': 'bg-red-500 text-white',
      'Paused': 'bg-gray-500 text-white'
    };
    
    return statusStyles[status] || 'bg-gray-500 text-white';
  };

  const getAPYColor = (apy) => {
    if (typeof apy === 'string') {
      const num = parseFloat(apy.replace('%', ''));
      if (num >= 50) return 'text-green-400';
      if (num >= 25) return 'text-yellow-400';
      return 'text-orange-400';
    }
    return 'text-gray-400';
  };

  return (
    <div className="crypto-card rounded-xl p-6 hover-lift">
      {/* Header with rank and status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 crypto-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">
            {index + 1}
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

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-800/50 rounded-lg p-3">
          <p className="text-xs text-gray-400">Total Raised</p>
          <p className="text-lg font-semibold text-white">{formatCurrency(presale.raise)}</p>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-3">
          <p className="text-xs text-gray-400">APY</p>
          <p className={`text-lg font-semibold ${getAPYColor(presale.apy)}`}>
            {presale.apy}
          </p>
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
          to={`/presale/${presale.slug}`}
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
  );
};

export default PresaleCard;