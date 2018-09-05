module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'prettier'],
  // required to lint *.vue files
  plugins: ['html', 'prettier'],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'arrow-body-style': 0,
    'no-plusplus': 0,
    'no-lonely-if': 0,
    'no-prototype-builtins': 0,
    'prefer-default-export': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV !== 'development' ? 2 : 0,
    'prettier/prettier': [
      'warn',
      {
        semi: true,
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
        bracketSpacing: true,
      },
    ],
  },
  globals: {
    Waypoint: true,
    twttr: true,
    instgrm: true,
  },
};
