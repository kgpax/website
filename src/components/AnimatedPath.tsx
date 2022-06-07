type TimingFunction = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'

type AnimatedPathProps = React.SVGAttributes<SVGPathElement> & {
  keyFrames: Record<number, string>
  duration?: string
  repeatCount?: number | 'indefinite'
  timingFunction?: TimingFunction
}

const timingFunctionToSplines = (
  timingFunction: TimingFunction,
  paths: string[],
) => {
  const map = {
    'linear': '0, 0, 1, 1',
    'ease-in': '0.11, 0, 0.5, 0',
    'ease-out': '0.5, 1, 0.89, 1',
    'ease-in-out': '0.45, 0, 0.55, 1',
  }
  const array = Array(paths.length - 1)
  return Array.from(array, () => map[timingFunction]).join(';')
}

const getTimingFunctionProps = (
  timingFunction: TimingFunction,
  paths: string[],
) => {
  if (timingFunction === 'linear') return { calcMode: 'linear' }

  return {
    calcMode: 'spline',
    keySplines: timingFunctionToSplines(timingFunction, paths),
  }
}

export default function AnimatedPath({
  keyFrames,
  duration = '1s',
  repeatCount = 'indefinite',
  timingFunction = 'linear',
  ...props
}: AnimatedPathProps) {
  const paths = Object.values(keyFrames)
  const keyFrameTimings = Object.keys(keyFrames)
    .map(x => Number(x) / 100)
    .join(';')

  const timingFunctionProps = getTimingFunctionProps(timingFunction, paths)

  return (
    <>
      <path className="hidden motion-reduce:block" {...props} d={paths[0]} />
      <path className="block motion-reduce:hidden" {...props} d={paths[0]}>
        <animate
          attributeName="d"
          values={paths.join(';')}
          keyTimes={keyFrameTimings}
          dur={duration}
          repeatCount={repeatCount}
          {...timingFunctionProps}
        />
      </path>
    </>
  )
}
