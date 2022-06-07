export type BlogDetails = {
  title: string
  shortTitle?: string
  date: string
}

export type BlogPrevNext = {
  prev?: string
  next?: string
}

export type BlogMetadata = BlogDetails & BlogPrevNext

export type BlogMetadataAndUrl = BlogMetadata & {
  slug: string
  fullPath: string
}
