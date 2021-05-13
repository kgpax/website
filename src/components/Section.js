import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  padding: ${({ theme }) => theme.space[4]};
  background: linear-gradient(
    ${({ bgAngle }) => `${bgAngle}deg`},
    ${({ bg, bg1, bg2, bgSplit }) =>
      `${bg1 || bg} ${bgSplit}%, ${bg2 || bg} ${bgSplit}%`}
  );
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
