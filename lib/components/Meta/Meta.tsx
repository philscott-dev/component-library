export interface MetaProps {
  title: string
  ogTitle: string
  ogDescription: string
  ogType: string
  ogImage: string
  ogUrl: string
}

const Meta = ({
  title,
  ogTitle,
  ogDescription,
  ogType,
  ogImage,
  ogUrl,
}: MetaProps) => {
  return (
    <head>
      <title>{title}</title>
      <meta name="title" content={ogTitle} />
      <meta name="description" content={ogDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
    </head>
  )
}

export default Meta
