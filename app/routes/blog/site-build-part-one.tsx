import { BlogPage } from '~/components'
import Blog, { attributes } from '~/content/blog/site-build-part-one.mdx'
import { components } from '~/utils/mdx'

export default function Post() {
  const { title, date } = attributes.meta
  return (
    <BlogPage title={title} date={date}>
      <Blog components={components} />
    </BlogPage>
  )
}
