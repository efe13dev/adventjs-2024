import love from 'eslint-config-love';

export default [
  {
    ...love,
    files: ['**/*.ts'],
    rules: {
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      'no-console': 'warn'
    }
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigDirName: import.meta.dirname
      }
    }
  }
];
