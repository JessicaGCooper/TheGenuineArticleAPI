module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['__tests__/*', '__tests__/**/*', '**/*.spec.js'],
      env: {
        jest: true
      }
    }
  ]
}
