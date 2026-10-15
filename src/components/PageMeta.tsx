const SITE = 'https://egeloma.com.au'

export interface PageMetaProps {
  title: string
  description: string
  path: string
  jsonLd?: object
}

// React 19 hoists <title>, <meta> and <link> into <head>.
export default function PageMeta({ title, description, path, jsonLd }: PageMetaProps) {
  const url = SITE + path
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
    </>
  )
}
