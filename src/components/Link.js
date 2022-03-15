import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  color: inherit;
  text-decoration: ${({ underline }) => underline};
`;

const Link = props => <StyledLink {...props} />;
Link.propTypes = {
  href: PropTypes.string.isRequired,
};

export default Link;
