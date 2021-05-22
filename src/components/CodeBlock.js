import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import text from 'react-syntax-highlighter/dist/cjs/languages/prism/pure';
import codeTheme from '../theme/code';

SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('text', text);

const Container = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.font.code};
  font-weight: 600;
  font-size: 1.5rem;
  margin: ${({ theme }) => theme.space.lg} 0;
  padding: 0 ${({ theme }) => theme.space.xl};

  @media only screen and (max-width: 767px) {
    padding: 0;
  }
`;

const CodeBlock = ({ language, showLineNumbers, code }) => (
  <Container>
    <SyntaxHighlighter
      language={language}
      style={codeTheme}
      showLineNumbers={showLineNumbers}
    >
      {code}
    </SyntaxHighlighter>
  </Container>
);
CodeBlock.propTypes = {
  language: PropTypes.string.isRequired,
  showLineNumbers: PropTypes.bool.isRequired,
};
CodeBlock.defaultProps = {
  language: 'js',
  showLineNumbers: false,
};

export default CodeBlock;
