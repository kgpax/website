import styled from 'styled-components';
import { space } from 'styled-system';
import PropTypes from 'prop-types';

const StyledContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  text-align: ${({ align }) => align};
  ${space}
`;

const Content = (props) => <StyledContent {...props} />;
Content.propTypes = {
  align: PropTypes.string,
};
Content.defaultProps = {
  align: 'left',
};

export default Content;
