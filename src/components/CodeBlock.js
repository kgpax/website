import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/prism/dracula';

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
      style={style}
      showLineNumbers={showLineNumbers}
      // customStyle={{ fontFamily: 'inherit' }}
      codeTagProps={{ style: { fontFamily: 'inherit' } }}
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
  language: 'jsx',
  showLineNumbers: false,
};

export default CodeBlock;
