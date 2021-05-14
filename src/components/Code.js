import styled from 'styled-components';

const StyledCode = styled.code`
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.7);
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[2]}`};
  border-radius: ${({ theme }) => theme.space[1]};
`;

const Code = (props) => <StyledCode {...props} />;

export default Code;
