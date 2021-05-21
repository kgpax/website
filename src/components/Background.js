import styled from 'styled-components';
import { pickColorPair } from '../utils/colors';
import Waves from './Waves';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100%;
  background: linear-gradient(
    180deg,
    ${({ bg1, bg2 }) => `${bg1} calc(50% + 160px), ${bg2} calc(50% + 160px)`}
  );
`;
const StyledWaves = styled(Waves)`
  position: absolute;
  top: calc(50% - 160px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;
const Children = styled.div`
  position: relative;
  z-index: 2;
`;

const Background = ({ children, ...props }) => {
  const [color1, color2] = pickColorPair();
  return (
    <Container bg1={color1} bg2={color2} {...props}>
      <StyledWaves color={color2} />
      <Children>{children}</Children>
    </Container>
  );
};

export default Background;
