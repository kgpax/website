import styled from 'styled-components';
import { space } from 'styled-system';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  ${space}
  padding: ${({ theme }) => theme.space.xl};
`;

const Section = (props) => <StyledSection {...props} />;
Section.propTypes = {
  bg: PropTypes.string,
  bg1: PropTypes.string,
  bg2: PropTypes.string,
  bgSplit: PropTypes.number,
  bgAngle: PropTypes.number,
};
Section.defaultProps = {
  bg: 'transparent',
  bgSplit: 50,
  bgAngle: 160,
};

export default Section;
