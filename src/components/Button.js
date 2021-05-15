import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid rgba(0, 0, 0, 0.7);
  border-radius: 1rem;
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
  background: rgba(0, 0, 0, 0.1);
  color: inherit;
  transition: background-color 0.1s ease-in-out;
  text-decoration: none;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
