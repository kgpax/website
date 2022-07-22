import { MDXComponents } from 'mdx/types'
import { Heading, Link, MdxCode } from '~/components'

export const components: MDXComponents = {
  h2: Heading,
  a: props => <Link className="font-bold" {...props} />,
  code: MdxCode,
}
