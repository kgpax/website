import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as WouterLink } from 'wouter';

const StyledLink = styled(WouterLink)`
  color: inherit;
`;

const Link = (props) => <StyledLink {...props} />;
Link.propTypes = {
  href: PropTypes.string.isRequired,
};

export default Link;
