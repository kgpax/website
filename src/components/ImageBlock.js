import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Image } from '.';

const Container = styled.div`
  max-width: 80%;
  width: ${({ width }) => width};
  margin: ${({ theme }) => theme.space.lg} auto;

  img {
    width: 100%;
    display: block;
    border: 3px solid #232323;
    border-radius: ${({ theme }) => theme.space.md};
  }
`;

const Figure = styled.figure`
  padding: 0;
  margin: 0;
`;

const Caption = styled.figcaption`
  margin-top: ${({ theme }) => theme.space.md};
  font-size: 1.3rem;
  line-height: 2.4rem;
  text-align: center;
`;

const ImageBlock = ({ src, alt, caption, ...props }) => (
  <Container {...props}>
    <Figure>
      <Image src={src} alt={alt || caption} />
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  </Container>
);
ImageBlock.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  width: PropTypes.string,
};
ImageBlock.defaultProps = {
  width: '100%',
};

export default ImageBlock;
