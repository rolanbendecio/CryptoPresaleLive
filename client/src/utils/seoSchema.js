// SEO Schema utilities for crypto presale posts

export const generateBlogPostingSchema = (presale) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": presale.title,
    "description": presale.description,
    "author": {
      "@type": "Organization",
      "name": "CryptoLaunch"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CryptoLaunch",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cryptolaunch.app/logo.png"
      }
    },
    "datePublished": presale.date,
    "dateModified": presale.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://cryptolaunch.app/presale/${presale.slug}`
    },
    "articleSection": "Cryptocurrency Presales",
    "keywords": [
      "crypto presale",
      presale.symbol,
      presale.category,
      "cryptocurrency",
      "blockchain",
      "investment"
    ],
    "about": {
      "@type": "Thing",
      "name": presale.title,
      "description": presale.description
    }
  };

  return JSON.stringify(schema);
};

export const generateProductSchema = (presale) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product", 
    "name": presale.title,
    "description": presale.description,
    "brand": {
      "@type": "Brand",
      "name": presale.title
    },
    "category": presale.category,
    "offers": {
      "@type": "Offer",
      "price": presale.raise.replace(/[$,]/g, ''),
      "priceCurrency": "USD",
      "availability": presale.status === 'Live' ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "url": presale.affiliateLink
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "APY",
        "value": presale.apy
      },
      {
        "@type": "PropertyValue", 
        "name": "Status",
        "value": presale.status
      },
      {
        "@type": "PropertyValue",
        "name": "Token Symbol", 
        "value": presale.symbol
      }
    ]
  };

  return JSON.stringify(schema);
};

export const generateOrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CryptoLaunch",
    "description": "Your trusted source for cryptocurrency presales and investment opportunities",
    "url": "https://cryptolaunch.app",
    "logo": "https://cryptolaunch.app/logo.png",
    "sameAs": [
      "https://twitter.com/cryptolaunch",
      "https://t.me/cryptolaunch"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@cryptolaunch.app"
    }
  };

  return JSON.stringify(schema);
};

export const generateWebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CryptoLaunch - Live Crypto Presales Tracker",
    "description": "Discover the hottest cryptocurrency presales with real-time updates, exclusive access, and expert analysis",
    "url": "https://cryptolaunch.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cryptolaunch.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CryptoLaunch"
    }
  };

  return JSON.stringify(schema);
};