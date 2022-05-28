/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: 'netlify',
  server: './server.js',
  ignoredRouteFiles: ['.*'],
  serverDependenciesToBundle: ['@mdx-js/react'],
  mdx: () => {
    return {}
  },
}
