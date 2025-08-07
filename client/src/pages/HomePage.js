import React, { useState, useEffect } from 'react';
import PresaleCard from '../components/PresaleCard';
import StatsBar from '../components/StatsBar';
import SEO from '../components/SEO';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchPosts();
    // Set up auto-refresh every 30 seconds
    const interval = setInterval(fetchPosts, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post => {
    if (filter === 'All') return true;
    return post.status === filter;
  });

  const filters = ['All', 'Live', 'Upcoming', 'Ended'];

  if (loading) {
    return (
      <div className=\"min-h-screen flex items-center justify-center\">
        <div className=\"text-center\">
          <div className=\"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4\"></div>
          <p className=\"text-gray-400\">Loading presales...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className=\"min-h-screen flex items-center justify-center\">
        <div className=\"text-center\">
          <p className=\"text-red-400 mb-4\">Error: {error}</p>
          <button 
            onClick={fetchPosts}
            className=\"crypto-gradient text-white px-6 py-2 rounded-lg hover:opacity-90\"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Live Crypto Presales"
        description="Discover the hottest cryptocurrency presales with real-time updates and exclusive access. Track live prices, analyze performance, and never miss an opportunity."
        keywords="crypto presales, cryptocurrency, presale, ICO, IDO, crypto investment, blockchain, live prices"
      />
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8\" id=\"presales\">
      {/* Hero Section */}
      <div className=\"text-center mb-12\">
        <h1 className=\"text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in\">
          Discover the Next Big Crypto
        </h1>
        <p className=\"text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up\">
          Get early access to the most promising cryptocurrency presales. 
          Track live prices, analyze performance, and never miss an opportunity.
        </p>
        <div className=\"flex items-center justify-center space-x-2\">
          <span className=\"text-green-400 font-medium\">● LIVE</span>
          <span className=\"text-gray-400\">Real-time updates every 30 seconds</span>
        </div>
      </div>

      {/* Stats Bar */}
      <StatsBar posts={posts} />

      {/* Filters */}
      <div className=\"flex flex-wrap gap-2 mb-8\">
        {filters.map(filterOption => (
          <button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors $\{
              filter === filterOption 
                ? 'crypto-gradient text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {filterOption}
            {filterOption !== 'All' && (
              <span className=\"ml-2 text-xs opacity-75\">
                ({posts.filter(p => p.status === filterOption).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Presales Grid */}
      {filteredPosts.length === 0 ? (
        <div className=\"text-center py-12\">
          <p className=\"text-gray-400 text-lg mb-4\">
            No presales found{filter !== 'All' ? ` with status \"${filter}\"` : ''}.
          </p>
          <button 
            onClick={() => setFilter('All')}
            className=\"text-blue-400 hover:text-blue-300 underline\"
          >
            View all presales
          </button>
        </div>
      ) : (
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in\">
          {filteredPosts.map((post, index) => (
            <PresaleCard key={post.slug || index} presale={post} index={index} />
          ))}
        </div>
      )}

      {/* Last Updated */}
      <div className=\"text-center mt-12 pt-8 border-t border-gray-800\">
        <p className=\"text-gray-500 text-sm\">
          Last updated: {new Date().toLocaleTimeString()} • 
          <span className=\"ml-2 text-green-400\">Auto-refreshing</span>
        </p>
      </div>
    </div>
    </>;
  );
};

export default HomePage;