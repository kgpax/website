import parseFrontMatter from 'front-matter'
import { BlogInfo, BlogMetadata, BlogMetadataAndUrl } from '~/types/blog'
import fs from '~/utils/fs.server'
import { bundleMDX } from '~/utils/mdx.server'
import process from '~/utils/process.server'

const blogContentPath = (filename: string = '') =>
  `${process.cwd()}/app/content/blog/${filename}`

export async function getPost(slug: string): Promise<BlogInfo | null> {
  const source = await fs
    .readFile(blogContentPath(`${slug}.mdx`), 'utf-8')
    .catch(() => null)

  if (source === null) return null

  const post = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])]
      options.rehypePlugins = [...(options.rehypePlugins ?? [])]
      return options
    },
    esbuildOptions(options) {
      options.platform = 'node'
      return options
    },
    cwd: blogContentPath(),
  })

  return {
    code: post.code,
    url: `/blog/${slug}`,
    ...(post.frontmatter as BlogMetadata),
  }
}

export async function getPosts(): Promise<BlogMetadataAndUrl[]> {
  const postsPath = await fs.readdir(blogContentPath(), {
    withFileTypes: true,
  })

  const posts = await Promise.all(
    postsPath.map(async entry => {
      const file = await fs.readFile(blogContentPath(entry.name))
      const { attributes } = parseFrontMatter<BlogMetadata>(file.toString())

      return {
        url: `/blog/${entry.name.replace(/\.mdx/, '')}`,
        ...attributes,
      } as BlogMetadataAndUrl
    }),
  )

  return posts
}
