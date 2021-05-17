import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImage = styled.img.attrs(({ src }) => ({
  src: `img/${src}`,
}))``;

const Image = (props) => <StyledImage {...props} />;
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
