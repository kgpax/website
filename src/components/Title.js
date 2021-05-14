import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const Title = (props) => <StyledTitle {...props} />;

export default Title;
