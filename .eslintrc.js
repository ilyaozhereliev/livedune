/* eslint-disable no-dupe-keys */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'linebreak-style': 0,
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'linebreak-style': ['error', 'windows'],
    'no-param-reassign': ['error', { props: false }],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],

    'implicit-arrow-linebreak': 'off',
    'linebreak-style': [2, 'windows'],
    'max-len': [2, { code: 120 }],
    'newline-before-return': 'warn',

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': 'off',

    'react/jsx-uses-react': 'warn',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],

    '@typescript-eslint/no-explicit-any': ['off'],
    'linebreak-style': 0,
  },
};
