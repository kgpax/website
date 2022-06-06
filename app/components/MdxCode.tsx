import Code from './Code'
import CodeBlock from './CodeBlock'

type MdxCodeProps = React.HTMLAttributes<HTMLElement> & {}

export default function MdxCode({ className, children }: MdxCodeProps) {
  const code = children as string
  return className?.startsWith('language-') ? (
    <CodeBlock language={className.split('-')[1]} code={code} />
  ) : (
    <Code>{code}</Code>
  )
}
