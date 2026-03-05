import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'Vincere One Reserve',
  tagline: 'Building a Stronger Local Network for Workers & Businesses in Bali',
  description:
    'We are organizing drivers, workers and merchants intor a structured community network that will provide better coordination, visibility and future financial access',
  description_short:
    'We are organizing drivers, workers and merchants intor a structured community network that will provide better coordination, visibility and future financial access',
  url: 'https://vincereonereserve.com',
  author: 'Adhi',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'en-US',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'en_US',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: : Building a Stronger Local Network for Workers & Businesses in Bali`,
  description:
    "We are organizing drivers, workers and merchants intor a structured community network that will provide better coordination, visibility and future financial access",
  image: ogImageSrc,
};

