import styled from 'styled-components';

const StyledParagraph = styled.p`
  & + & {
    margin-top: ${({ theme }) => theme.space.lg};
  }
`;

const Paragraph = (props) => <StyledParagraph {...props} />;
Paragraph.propTypes = {};
Paragraph.defaultProps = {};

export default Paragraph;
