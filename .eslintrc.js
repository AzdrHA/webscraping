module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  plugins: ['jsdoc'],
  extends: [
    'standard-with-typescript',
    'plugin:jsdoc/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    project: 'tsconfig.eslintrc.json'
  },
  rules: {
  },
  overrides: [
    {
      files: ['test/*/.ts'],
      env: {
        jest: true,
        node: true
      }
    }
  ]
}
