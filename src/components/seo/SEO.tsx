import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/data/siteConfig'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export function SEO({
  title,
  description = siteConfig.description,
  canonical,
  image = '/og-image.jpg',
  type = 'website',
  noindex = false,
}: SEOProps) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.seo.defaultTitle

  const fullCanonical = canonical
    ? `${siteConfig.url}${canonical}`
    : undefined

  const fullImage = image.startsWith('http')
    ? image
    : `${siteConfig.url}${image}`

  return (
    <Helmet>
      {/* Basic */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content={siteConfig.seo.locale} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  )
}

export default SEO
