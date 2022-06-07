const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
})

module.exports = withMDX({
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      process: false,
      path: false,
      stream: false,
      events: false,
      os: false,
      util: false,
    }

    return config
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
