import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PresaleDetail = () => {
  const { slug } = useParams();
  const [presale, setPresale] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPresale();
  }, [slug]);

  const fetchPresale = async () => {
    try {
      const response = await fetch(`/api/posts/${slug}`);
      if (!response.ok) {
        throw new Error('Presale not found');
      }
      const data = await response.json();
      setPresale(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className=\"min-h-screen flex items-center justify-center\">
        <div className=\"text-center\">
          <div className=\"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4\"></div>
          <p className=\"text-gray-400\">Loading presale details...</p>
        </div>
      </div>
    );
  }

  if (error || !presale) {
    return (
      <div className=\"min-h-screen flex items-center justify-center\">
        <div className=\"text-center\">
          <p className=\"text-red-400 mb-4\">{error || 'Presale not found'}</p>
          <Link 
            to=\"/\"
            className=\"crypto-gradient text-white px-6 py-2 rounded-lg hover:opacity-90\"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Live': 'bg-green-500 text-white',
      'Upcoming': 'bg-yellow-500 text-white', 
      'Ended': 'bg-red-500 text-white',
      'Paused': 'bg-gray-500 text-white'
    };
    
    return statusStyles[status] || 'bg-gray-500 text-white';
  };

  return (
    <>
      <SEO 
        title={presale.title}
        description={presale.description}
        keywords={`${presale.title}, ${presale.symbol}, crypto presale, ${presale.category}, cryptocurrency investment`}
        presale={presale}
        type="article"
        url={`https://cryptolaunch.app/presale/${presale.slug}`}
      />
      <div className=\"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8\">
      {/* Back button */}
      <Link 
        to=\"/\" 
        className=\"inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors\"
      >
        <svg className=\"w-4 h-4 mr-2\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">
          <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M15 19l-7-7 7-7\" />
        </svg>
        Back to Presales
      </Link>

      {/* Header */}
      <div className=\"crypto-card rounded-xl p-8 mb-8\">
        <div className=\"flex items-center justify-between mb-6\">
          <div>
            <h1 className=\"text-3xl md:text-4xl font-bold text-white mb-2\">
              {presale.title}
            </h1>
            <p className=\"text-gray-400 text-lg\">{presale.symbol}</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusBadge(presale.status)}`}>
            {presale.status}
          </span>
        </div>

        <p className=\"text-gray-300 text-lg mb-6\">
          {presale.description}
        </p>

        {/* Key Metrics */}
        <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8\">
          <div className=\"bg-gray-800/50 rounded-lg p-4 text-center\">
            <h3 className=\"text-gray-400 text-sm mb-2\">Total Raised</h3>
            <p className=\"text-2xl font-bold text-white\">{presale.raise}</p>
          </div>
          <div className=\"bg-gray-800/50 rounded-lg p-4 text-center\">
            <h3 className=\"text-gray-400 text-sm mb-2\">APY</h3>
            <p className=\"text-2xl font-bold text-green-400\">{presale.apy}</p>
          </div>
          <div className=\"bg-gray-800/50 rounded-lg p-4 text-center\">
            <h3 className=\"text-gray-400 text-sm mb-2\">Status</h3>
            <p className=\"text-2xl font-bold text-white\">{presale.status}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className=\"text-center\">
          <a
            href={presale.affiliateLink}
            target=\"_blank\"
            rel=\"noopener noreferrer\"
            className=\"inline-block crypto-gradient text-white text-xl font-bold py-4 px-12 rounded-xl hover:opacity-90 transition-opacity\"
          >
            🚀 Invest in {presale.symbol} Now
          </a>
        </div>
      </div>

      {/* Additional Information */}
      <div className=\"crypto-card rounded-xl p-8\">
        <h2 className=\"text-2xl font-bold text-white mb-6\">Investment Information</h2>
        
        <div className=\"space-y-6\">
          <div>
            <h3 className=\"text-lg font-semibold text-white mb-2\">Risk Disclaimer</h3>
            <p className=\"text-gray-300\">
              Cryptocurrency investments are highly volatile and risky. Only invest what you can afford to lose. 
              This information is for educational purposes only and should not be considered as financial advice.
            </p>
          </div>
          
          <div>
            <h3 className=\"text-lg font-semibold text-white mb-2\">How to Participate</h3>
            <ol className=\"list-decimal list-inside text-gray-300 space-y-2\">
              <li>Click the investment link above to visit the official presale page</li>
              <li>Connect your cryptocurrency wallet</li>
              <li>Choose your investment amount</li>
              <li>Confirm the transaction and wait for confirmation</li>
              <li>Your tokens will be distributed according to the project's schedule</li>
            </ol>
          </div>
        </div>

        <div className=\"mt-8 pt-6 border-t border-gray-700\">
          <p className=\"text-gray-500 text-sm\">
            Last updated: {new Date(presale.date).toLocaleDateString()} • 
            Information sourced from official project channels
          </p>
        </div>
      </div>
    </div>
    </>;
  );
};

export default PresaleDetail;