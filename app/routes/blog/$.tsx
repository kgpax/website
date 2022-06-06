import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import { BlogPage } from '~/components'
import { BlogMetadataAndCode, BlogMetadataAndUrl } from '~/types/blog'
import { getPost, getPosts } from '~/utils/blog'
import { components } from '~/utils/mdx'

type BlogSlugData = BlogMetadataAndCode & { allPosts: BlogMetadataAndUrl[] }
type BlogSlugProps = React.HTMLAttributes<HTMLElement> & BlogSlugData

export const loader: LoaderFunction = async ({
  params,
}): Promise<BlogSlugData> => {
  const slug = params['*']
  if (!slug) throw new Response('Not found', { status: 404 })

  try {
    const post = await getPost(slug)
    if (!post) throw new Response('Not found', { status: 404 })

    const allPosts = await getPosts()
    return {
      allPosts,
      ...post,
    }
  } catch (e) {
    throw e
  }
}

export default function BlogSlug() {
  const { allPosts, title, date, code, prev, next } =
    useLoaderData<BlogSlugData>()
  const Component = useMemo(() => getMDXComponent(code), [code])

  const prevPage = prev ? allPosts.find(x => x.url.endsWith(prev)) : undefined
  const nextPage = next ? allPosts.find(x => x.url.endsWith(next)) : undefined

  return (
    <BlogPage title={title} date={date} prev={prevPage} next={nextPage}>
      <Component components={components} />
    </BlogPage>
  )
}
