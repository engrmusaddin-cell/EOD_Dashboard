module.exports = [
  {
    ignores: ['node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { React: 'readonly' },
    },
    linterOptions: { reportUnusedDisableDirectives: true },
    rules: {},
  },
];
