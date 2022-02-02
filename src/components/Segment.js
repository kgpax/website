import styled from 'styled-components';
import Heading from './Heading';

const StyledSegment = styled.section`
  margin: ${({ theme }) => theme.space.xl} 0 0 0;
`;

const Segment = ({ heading, children, ...props }) => {
  const id = heading && heading.toLowerCase().replace(/\s/g, '-');
  return (
    <StyledSegment id={id} {...props}>
      {heading && <Heading>{heading}</Heading>}
      {children}
    </StyledSegment>
  );
};

export default Segment;
