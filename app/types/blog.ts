export type BlogMetadata = {
  title: string
  shortTitle?: string
  date: string
  prev?: string
  next?: string
}

export type BlogMetadataAndUrl = BlogMetadata & {
  url: string
}

export type BlogMetadataAndCode = BlogMetadata & {
  code: string
}

export type BlogMetadataAndPrevNext = Omit<BlogMetadata, 'prev' | 'next'> & {
  prev?: BlogMetadataAndUrl
  next?: BlogMetadataAndUrl
}

export type BlogInfo = BlogMetadata & BlogMetadataAndUrl & BlogMetadataAndCode
