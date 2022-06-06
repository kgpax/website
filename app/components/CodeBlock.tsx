import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup'
import text from 'react-syntax-highlighter/dist/cjs/languages/prism/pure'
import codeTheme from '~/styles/codeTheme'
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('html', html)
SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('text', text)

type CodeBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  language?: string
  showLineNumbers?: boolean
  code: string
}

export default function CodeBlock({
  language = 'txt',
  showLineNumbers = false,
  code,
}: CodeBlockProps) {
  return (
    <div className="relative font-code font-semibold text-xs p-0 my-7 md:px-10">
      <SyntaxHighlighter
        language={language}
        style={codeTheme}
        showLineNumbers={showLineNumbers}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
