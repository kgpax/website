import styled from 'styled-components';

const wavePaths = [
  'M0,224L48,192C96,160,192,96,288,90.7C384,85,480,139,576,138.7C672,139,768,85,864,101.3C960,117,1056,203,1152,224C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  'M0,288L48,261.3C96,235,192,181,288,133.3C384,85,480,43,576,58.7C672,75,768,149,864,170.7C960,192,1056,160,1152,170.7C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  'M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,138.7C672,96,768,64,864,48C960,32,1056,32,1152,48C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
];
const cubicBezier = '0.42, 0, 0.58, 1';
const animationProperties = {
  repeatCount: 'indefinite',
  calcMode: 'spline',
  keySplines: `${cubicBezier};${cubicBezier};${cubicBezier}`,
};

const StyledWaves = styled.svg`
  display: block;
  min-width: 1440px;

  & g.no-anim {
    display: none;
  }
  & g.anim {
    display: block;
  }

  @media (prefers-reduced-motion) {
    & g.no-anim {
      display: block;
    }
    & g.anim {
      display: none;
    }
  }
`;

const Waves = ({ color, ...props }) => (
  <StyledWaves
    viewBox="0 0 1440 320"
    width="100%"
    height="320"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g className="no-anim">
      <path
        fill={color}
        fillOpacity="0.35"
        d={wavePaths[0]}
        className="no-anim"
      />
      <path
        fill={color}
        fillOpacity="0.5"
        d={wavePaths[1]}
        className="no-anim"
      />
      <path fill={color} fillOpacity="1" d={wavePaths[2]} className="no-anim" />
    </g>
    <g className="anim">
      <path fill={color} fillOpacity="0.35" d={wavePaths[0]}>
        <animate
          attributeName="d"
          values={`${wavePaths[0]};${wavePaths[2]};${wavePaths[1]};${wavePaths[0]};`}
          keyTimes="0;0.2;0.8;1"
          dur="30s"
          {...animationProperties}
        />
      </path>
      <path fill={color} fillOpacity="0.5" d={wavePaths[1]}>
        <animate
          attributeName="d"
          values={`${wavePaths[1]};${wavePaths[0]};${wavePaths[2]};${wavePaths[1]};`}
          keyTimes="0;0.3;0.7;1"
          dur="25s"
          {...animationProperties}
        />
      </path>
      <path fill={color} fillOpacity="1" d={wavePaths[2]}>
        <animate
          attributeName="d"
          values={`${wavePaths[2]};${wavePaths[1]};${wavePaths[0]};${wavePaths[2]};`}
          keyTimes="0;0.4;0.6;1"
          dur="35s"
          {...animationProperties}
        />
      </path>
    </g>
  </StyledWaves>
);

export default Waves;
