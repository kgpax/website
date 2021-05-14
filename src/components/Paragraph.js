import styled from 'styled-components';

const StyledParagraph = styled.p`
  & + & {
    margin-top: ${({ theme }) => theme.space[3]};
  }
`;

const Paragraph = (props) => <StyledParagraph {...props} />;
Paragraph.propTypes = {};
Paragraph.defaultProps = {};

export default Paragraph;
