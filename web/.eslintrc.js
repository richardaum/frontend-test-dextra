module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': ['error']
  },
};