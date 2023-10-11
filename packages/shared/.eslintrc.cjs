// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  ignorePatterns: ['src/wagmi.ts'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['jest'],
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
    'class-methods-use-this': 'off',
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
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 0,
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
