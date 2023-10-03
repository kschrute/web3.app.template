// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb/rules/react',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['src/wagmi/generated.ts'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jest'],
  rules: {
    semi: [2, 'never'],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'object-curly-newline': ['error', {
      // ObjectExpression: 'always',
      // ObjectPattern: { multiline: true },
      ImportDeclaration: { multiline: true, minProperties: 10 },
      ExportDeclaration: { multiline: true, minProperties: 10 }
    }],
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': ['error', {
      functions: false,
    }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', resolve(__dirname, 'src')],
          ['@', resolve(__dirname, 'src')],
        ],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  globals: {
    ID: true,
    EntityMutation: true,
    ArrayItem: true,
  },
}
