import { MDXComponents } from 'mdx/types'
import { Code, Link } from '~/components'
import Heading from '~/components/Heading'

export const components: MDXComponents = {
  h2: Heading,
  a: Link,
  code: Code,
}
