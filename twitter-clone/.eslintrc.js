module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    project: ['tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }

  },
  plugins: [
    'react'
  ],
  rules: {
    'no-constant-condition': ['off'],
    'react/no-unescaped-entities': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off']
  }
}
