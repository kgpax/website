import styled from 'styled-components';

const StyledCode = styled.code`
  display: inline-block;
  font-family: ${({ theme }) => theme.font.code};
  font-size: 1.5rem;
  line-height: 1.7em;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.3);
  padding: 0.2rem ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.space.sm};
  transform: translateY(-0.1rem);
`;

const Code = (props) => <StyledCode {...props} />;

export default Code;
