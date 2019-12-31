// .eslintrc.js

module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    es6: true
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },

  // extends: 'standard',

  plugins: ['react', 'jsdoc'],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    describe: 'false',
    it: 'false',
    expect: 'false'
  },

  rules: {
    'space-before-function-paren': ['error', 'never'], // function foo () {} ==> function foo() {}

    'react/jsx-uses-vars': 1, // 防止在JSX中使用的变量被错误地标记为未使用,
    'react/react-in-jsx-scope': 1,
    'react/jsx-uses-react': 1,

    'jsdoc/check-examples': 1,
    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/newline-after-description': 1,
    'jsdoc/no-undefined-types': 1,
    'jsdoc/require-description': 1,
    'jsdoc/require-description-complete-sentence': 0,
    'jsdoc/require-example': 1,
    'jsdoc/require-hyphen-before-param-description': 0,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns': 1,
    'jsdoc/require-returns-check': 1,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,
    'jsdoc/valid-types': 1
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    jsdoc: {}
  }
}
