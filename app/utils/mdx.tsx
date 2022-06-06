import { MDXComponents } from 'mdx/types'
import { Link, MdxCode } from '~/components'
import Heading from '~/components/Heading'

export const components: MDXComponents = {
  h2: Heading,
  a: Link,
  code: MdxCode,
}
