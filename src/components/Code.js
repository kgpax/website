import styled from 'styled-components';

const StyledCode = styled.code`
  font-family: ${({ theme }) => theme.font.code};
  font-size: 0.9em;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.3);
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.space.sm};
`;

const Code = (props) => <StyledCode {...props} />;

export default Code;
