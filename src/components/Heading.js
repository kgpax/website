import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-family: 'Clicker Script', cursive;
  font-weight: 700;
  font-size: 4rem;
  text-align: center;
  opacity: 0.8;
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

const Heading = (props) => <StyledHeading {...props} />;

export default Heading;
