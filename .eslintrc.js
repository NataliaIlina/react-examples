module.exports = {
  extends: ['prettier', 'plugin:prettier/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['@typescript-eslint', 'react', 'prettier', 'unused-imports'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        enableDangerousAutofixThisMayCauseInfiniteLoops: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/.styled.ts'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
};
