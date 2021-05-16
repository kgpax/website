import styled from 'styled-components';

const StyledImage = styled.img.attrs(({ src }) => ({
  src: `img/${src}`,
}))``;

const Image = (props) => <StyledImage {...props} />;

export default Image;
