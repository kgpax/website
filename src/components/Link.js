import styled from 'styled-components';
import { Link as WouterLink } from 'wouter';

const StyledLink = styled(WouterLink)`
  color: inherit;
`;

const Link = (props) => <StyledLink {...props} />;

export default Link;
