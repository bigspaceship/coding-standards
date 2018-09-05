module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/no-named-as-default': 0,
    'no-nested-ternary': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/jsx-one-expression-per-line': 0,
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/core-modules': ['styled-jsx', 'styled-jsx/css'],
  },
};
