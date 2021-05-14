import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-family: 'Clicker Script', cursive;
  font-weight: 700;
  font-style: italic;
  font-size: 4rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const Heading = (props) => <StyledHeading {...props} />;

export default Heading;
