import styled from 'styled-components';
import { pickColorPair } from '../utils/colors';

const Container = styled.div`
  position: relative;
  height: 100%;
  background: linear-gradient(
    180deg,
    ${({ bg1, bg2 }) => `${bg1} calc(50% + 160px), ${bg2} calc(50% + 160px)`}
  );
`;
const Svg = styled.svg`
  position: absolute;
  display: block;
  top: calc(50% - 160px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 1440px;
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
      <Svg
        id="svg"
        viewBox="0 0 1440 320"
        width="100vw"
        height="320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color2}
          fillOpacity="0.5"
          d="M0,288L48,261.3C96,235,192,181,288,133.3C384,85,480,43,576,58.7C672,75,768,149,864,170.7C960,192,1056,160,1152,170.7C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <path
          fill={color2}
          fillOpacity="1"
          d="M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,138.7C672,96,768,64,864,48C960,32,1056,32,1152,48C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </Svg>
      <Children>{children}</Children>
    </Container>
  );
};

export default Background;
