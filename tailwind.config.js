const plugin = require('tailwindcss/plugin')

const fontFallbacks = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
]

module.exports = {
  content: ['./src/**/*.{html,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Recursive', ...fontFallbacks],
        title: ['Shanti', ...fontFallbacks],
        cursive: ['Clicker Script', 'cursive'],
        code: ['Cousine', 'Courier New', 'Courier', 'monospace'],
      },
      fontSize: {
        'title': ['6rem', '1'],
        'subtitle': ['5rem', '1'],
        'xs': ['0.75rem', '1.4em'],
        'sm': ['0.875rem', '1.65em'],
        'base': ['1rem', '1.9em'],
        'lg': ['1.125rem', '1.9em'],
        'xl': ['1.25rem', '1.9em'],
        '2xl': ['1.5rem', '2.4em'],
        '3xl': ['1.875rem', '2.65em'],
        '4xl': ['2.25rem', '2.9em'],
        '5xl': ['3rem', '1'],
        '6xl': ['3.75rem', '1'],
        '7xl': ['4.5rem', '1'],
        '8xl': ['6rem', '1'],
        '9xl': ['8rem', '1'],
      },
      height: {
        logo: '1.2em',
      },
      animation: {
        handwave: 'handwave 0.4s ease-in-out 1s 3 forwards alternate',
      },
      keyframes: {
        handwave: {
          '0%': { transform: 'rotateZ(0deg)' },
          '50%': { transform: 'rotateZ(30deg)' },
          '100%': { transform: 'rotateZ(0deg)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('child-image', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const element = e(`child-image${separator}${className}`)
          return `.${element} > svg, .${element} > img`
        })
      })
    }),
  ],
}
