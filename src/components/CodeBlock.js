import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  CodeBlock as ReactCodeBlock,
  monokai as codeTheme,
} from 'react-code-blocks';

const Container = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.font.code};
  font-weight: 600;
  margin: ${({ theme }) => theme.space.lg} 0;
  padding: 0 ${({ theme }) => theme.space.xl};

  @media only screen and (max-width: 900px) {
    padding: 0;
  }
`;

const CodeBlock = ({ language, showLineNumbers, code }) => (
  <Container>
    <ReactCodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={codeTheme}
    />
  </Container>
);
CodeBlock.propTypes = {
  language: PropTypes.string.isRequired,
  showLineNumbers: PropTypes.bool.isRequired,
};
CodeBlock.defaultProps = {
  language: 'jsx',
  showLineNumbers: true,
};

export default CodeBlock;
