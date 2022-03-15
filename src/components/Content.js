import styled from 'styled-components';
import { space } from 'styled-system';
import PropTypes from 'prop-types';

const StyledContent = styled.article`
  width: 100%;
  max-width: 65rem;
  margin: 0 auto;
  text-align: ${({ align }) => align};
  ${space}

  @media only screen and (min-width: 768px) {
    max-width: 70rem;
  }
`;

const Content = props => <StyledContent {...props} />;
Content.propTypes = {
  align: PropTypes.string,
};
Content.defaultProps = {
  align: 'left',
};

export default Content;
