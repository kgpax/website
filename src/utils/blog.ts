import fs from 'fs/promises'
import { BlogMetadataAndUrl } from '~/types/blog'

const blogContentPath = (filename: string = '') =>
  `${process.cwd()}/src/pages/blog/${filename}`

export async function getPosts(): Promise<BlogMetadataAndUrl[]> {
  const postsPath = await fs.readdir(blogContentPath(), {
    withFileTypes: true,
  })

  const posts = await Promise.all(
    postsPath.map(async entry => {
      const slug = entry.name.replace(/\.mdx/, '')
      const { meta } = await require(`src/pages/blog/${slug}.mdx`)

      return {
        slug,
        fullPath: `/blog/${slug}`,
        ...meta,
      } as BlogMetadataAndUrl
    }),
  )

  return posts
}
