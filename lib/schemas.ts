// Comprehensive schema.org structured data for all pages

export const generateLiveBlogPostingSchema = (presales: any[]) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  
  return {
    "@context": "https://schema.org",
    "@type": "LiveBlogPosting",
    "headline": "Live Crypto Presales Tracker - Real-Time Updates",
    "description": "Track live cryptocurrency presales with real-time updates every 8 seconds. Get instant alerts on new presales, price changes, and investment opportunities.",
    "url": baseUrl,
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "coverageStartTime": new Date().toISOString(),
    "coverageEndTime": new Date(Date.now() + 86400000).toISOString(), // 24 hours coverage
    "about": {
      "@type": "Event",
      "name": "Cryptocurrency Presale Tracking",
      "description": "Live tracking of crypto presale investments and opportunities"
    },
    "author": {
      "@type": "Organization",
      "name": "CryptoLaunch",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "CryptoLaunch",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "liveBlogUpdate": presales.slice(0, 10).map((presale, index) => ({
      "@type": "BlogPosting",
      "headline": `${presale.title} - ${presale.status} Presale`,
      "articleBody": presale.description,
      "datePublished": presale.date || new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "CryptoLaunch"
      },
      "position": index + 1,
      "url": `${baseUrl}/presale/${presale.slug}`
    })),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": baseUrl
    }
  }
}

export const generateWebsiteSchema = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CryptoLaunch",
    "alternateName": "Crypto Presales Tracker",
    "url": baseUrl,
    "description": "Track and invest in the best cryptocurrency presales with real-time data and analysis",
    "publisher": {
      "@type": "Organization",
      "name": "CryptoLaunch",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://twitter.com/cryptolaunch",
      "https://t.me/cryptolaunch",
      "https://discord.gg/cryptolaunch"
    ]
  }
}

export const generateOrganizationSchema = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CryptoLaunch",
    "legalName": "CryptoLaunch Platform",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Leading cryptocurrency presale tracking and investment platform",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "customer service",
        "email": "support@cryptolaunch.com",
        "availableLanguage": ["English"]
      }
    ],
    "sameAs": [
      "https://twitter.com/cryptolaunch",
      "https://t.me/cryptolaunch",
      "https://discord.gg/cryptolaunch",
      "https://youtube.com/cryptolaunch"
    ]
  }
}

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  }
}

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export const generateHowToSchema = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Invest in Crypto Presales",
    "description": "Step-by-step guide to discovering and investing in cryptocurrency presales",
    "image": `${baseUrl}/how-to-invest.png`,
    "totalTime": "PT15M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "100"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Cryptocurrency wallet (MetaMask, Trust Wallet)"
      },
      {
        "@type": "HowToSupply",
        "name": "Cryptocurrency (ETH, BNB, USDT)"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Web browser"
      },
      {
        "@type": "HowToTool",
        "name": "CryptoLaunch platform"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Browse Presales",
        "text": "Explore our curated list of active and upcoming presales",
        "url": `${baseUrl}/how-it-works#step1`
      },
      {
        "@type": "HowToStep",
        "name": "Analyze Projects",
        "text": "Review detailed information including tokenomics and roadmaps",
        "url": `${baseUrl}/how-it-works#step2`
      },
      {
        "@type": "HowToStep",
        "name": "Check Live Metrics",
        "text": "Monitor real-time price changes and trading volume",
        "url": `${baseUrl}/how-it-works#step3`
      },
      {
        "@type": "HowToStep",
        "name": "Connect Wallet",
        "text": "Set up a compatible crypto wallet like MetaMask",
        "url": `${baseUrl}/how-it-works#step4`
      },
      {
        "@type": "HowToStep",
        "name": "Invest Securely",
        "text": "Complete your investment through the official presale platform",
        "url": `${baseUrl}/how-it-works#step5`
      }
    ]
  }
}

export const generatePresaleSchema = (presale: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": presale.title,
    "description": presale.description,
    "image": `${baseUrl}/presales/${presale.slug}.png`,
    "brand": {
      "@type": "Brand",
      "name": presale.title
    },
    "offers": {
      "@type": "Offer",
      "url": presale.affiliateLink,
      "priceCurrency": "USD",
      "price": typeof presale.raise === 'string' ? 
        presale.raise.replace(/[$,]/g, '') : 
        presale.raise.toString(),
      "availability": presale.status === 'Live' ? 
        "https://schema.org/InStock" : 
        "https://schema.org/PreOrder",
      "priceValidUntil": presale.endDate || new Date(Date.now() + 30 * 86400000).toISOString()
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": presale.participants || "1000"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Token Symbol",
        "value": presale.symbol
      },
      {
        "@type": "PropertyValue",
        "name": "APY",
        "value": presale.apy
      },
      {
        "@type": "PropertyValue",
        "name": "Category",
        "value": presale.category || "DeFi"
      }
    ]
  }
}

export const generateFinancialServiceSchema = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "CryptoLaunch Investment Platform",
    "description": "Platform for discovering and investing in cryptocurrency presales",
    "url": baseUrl,
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Crypto Presale Investments",
      "itemListElement": [
        {
          "@type": "FinancialProduct",
          "name": "Cryptocurrency Presales",
          "description": "Early-stage token investments"
        }
      ]
    },
    "provider": {
      "@type": "Organization",
      "name": "CryptoLaunch"
    }
  }
}

export const generateCollectionPageSchema = (title: string, description: string, items: any[]) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": title,
    "description": description,
    "url": baseUrl,
    "hasPart": items.map(item => ({
      "@type": "Product",
      "name": item.title,
      "description": item.description,
      "url": `${baseUrl}/presale/${item.slug}`
    })),
    "numberOfItems": items.length,
    "provider": {
      "@type": "Organization",
      "name": "CryptoLaunch"
    }
  }
}