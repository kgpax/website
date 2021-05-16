import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  CodeBlock as ReactCodeBlock,
  monokai as codeTheme,
} from 'react-code-blocks';
import { Paragraph } from '.';

const StyledParagraph = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.code};
  font-weight: 600;
  padding: 0 ${({ theme }) => theme.space.xl};

  @media only screen and (max-width: 900px) {
    padding: 0;
  }
`;

const CodeBlock = ({ language, showLineNumbers, code }) => (
  <StyledParagraph>
    <ReactCodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={codeTheme}
    />
  </StyledParagraph>
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
