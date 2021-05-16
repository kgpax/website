import styled from 'styled-components';
import Heading from './Heading';

const StyledSegment = styled.section`
  margin: ${({ theme }) => theme.space[4]} 0 0 0;
`;

const Segment = ({ heading, children, ...props }) => (
  <StyledSegment {...props}>
    {heading && <Heading>{heading}</Heading>}
    {children}
  </StyledSegment>
);

export default Segment;
