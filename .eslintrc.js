module.exports = {
  extends: ['@remix-run/eslint-config', 'plugin:mdx/recommended'],
  settings: {
    'mdx/code-blocks': true,
    'mdx/language-mapper': {},
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx', '**/*.mdx'],
    },
  ],
}
