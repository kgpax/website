import { MDXComponents } from 'mdx/types'
import { BlogPage, Heading, Link, MdxCode } from '~/components'

export const components: MDXComponents = {
  wrapper: props => {
    console.log(props)
    return <BlogPage {...props}>{props.children}</BlogPage>
  },
  h2: Heading,
  a: Link,
  code: MdxCode,
}
