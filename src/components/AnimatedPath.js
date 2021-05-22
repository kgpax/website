import styled from 'styled-components';
import PropTypes from 'prop-types';

const timingFunctionToSplines = (timingFunction, paths) => {
  const map = {
    'ease-in': '0.11, 0, 0.5, 0',
    'ease-out': '0.5, 1, 0.89, 1',
    'ease-in-out': '0.45, 0, 0.55, 1',
  };
  return Array.from(Array(paths.length - 1), () => map[timingFunction]).join(
    ';'
  );
};

const getTimingFunctionProps = (timingFunction, paths) => {
  if (timingFunction === 'linear') return { calcMode: 'linear' };

  return {
    calcMode: 'spline',
    keySplines: timingFunctionToSplines(timingFunction, paths),
  };
};

const StyledNonAnimatedPath = styled.path`
  display: none;
  @media (prefers-reduced-motion) {
    display: block;
  }
`;

const StyledAnimatedPath = styled.path`
  display: block;
  @media (prefers-reduced-motion) {
    display: none;
  }
`;

const AnimatedPath = ({
  keyFrames,
  duration,
  repeatCount,
  timingFunction,
  ...props
}) => {
  const paths = Object.values(keyFrames);
  const keyFrameTimings = Object.keys(keyFrames)
    .map((x) => x / 100)
    .join(';');

  const timingFunctionProps = getTimingFunctionProps(timingFunction, paths);

  return (
    <>
      <StyledNonAnimatedPath {...props} d={paths[0]} />
      <StyledAnimatedPath {...props} d={paths[0]}>
        <animate
          attributeName="d"
          values={paths.join(';')}
          keyTimes={keyFrameTimings}
          dur={duration}
          repeatCount={repeatCount}
          {...timingFunctionProps}
        />
      </StyledAnimatedPath>
    </>
  );
};
AnimatedPath.propTypes = {
  keyFrames: PropTypes.object.isRequired,
  duration: PropTypes.string,
  repeatCount: PropTypes.oneOf(['indefinite', PropTypes.number]),
  timingFunction: PropTypes.oneOf([
    'linear',
    'ease-in',
    'ease-out',
    'ease-in-out',
  ]),
};
AnimatedPath.defaultProps = {
  duration: '1s',
  repeatCount: 'indefinite',
  timingFunction: 'linear',
};

export default AnimatedPath;
