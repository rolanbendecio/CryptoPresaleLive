// SEO Configuration for Client Components
export const seoConfig = {
  baseUrl: 'https://cryptolaunch.com',
  defaultTitle: 'CryptoLaunch - Best Crypto Presales 2025',
  titleTemplate: '%s | CryptoLaunch',
  defaultDescription: 'Track 50+ vetted crypto presales & ICOs. Live updates, expert analysis, APY up to 500%.',
  
  pages: {
    faq: {
      title: 'Crypto Presale FAQ 2025 | 50+ Questions Answered',
      description: '❓ Complete FAQ: How to buy presales, avoid scams, understand vesting, calculate returns. Expert answers to 50+ questions. Updated for 2025 regulations.',
      keywords: 'crypto presale FAQ 2025, how to buy presale tokens, presale scam prevention, vesting schedule explained, presale investment questions, ICO vs presale difference, presale gas fees, KYC for presales',
      canonical: '/faq'
    },
    contact: {
      title: 'Contact & Submit Presale | 24/7 Support - CryptoLaunch',
      description: '📧 Submit your presale for free listing. Partnership inquiries welcome. 24/7 support via live chat, email, Telegram. Response within 2 hours guaranteed.',
      keywords: 'submit crypto presale, list ICO free, presale submission form, crypto partnership contact, presale support team, list token sale, ICO listing requirements',
      canonical: '/contact'
    }
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    site_name: 'CryptoLaunch',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CryptoLaunch - Best Crypto Presales 2025'
      }
    ]
  },
  
  twitter: {
    handle: '@cryptolaunch',
    site: '@cryptolaunch',
    cardType: 'summary_large_image'
  }
}

// Helper function to generate page metadata
export function getPageMetadata(page: keyof typeof seoConfig.pages) {
  const pageConfig = seoConfig.pages[page]
  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    openGraph: {
      ...seoConfig.openGraph,
      title: pageConfig.title,
      description: pageConfig.description,
      url: `${seoConfig.baseUrl}${pageConfig.canonical}`
    },
    twitter: {
      ...seoConfig.twitter,
      title: pageConfig.title,
      description: pageConfig.description
    },
    alternates: {
      canonical: pageConfig.canonical
    }
  }
}