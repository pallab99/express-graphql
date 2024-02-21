module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'unused-imports', 'unused-vars'],
  rules: {
    'import/order': 'error', // This rule will enforce a convention in module import order
    'unused-imports/no-unused-imports': 'error', // This rule will report any unused imports
    'unused-vars': 'error', // This rule will report any unused variables
  },
};
