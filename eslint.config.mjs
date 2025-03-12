// @ts-nocheck
import withNuxt from './.nuxt/eslint.config.mjs';

/** @type {import('eslint').Linter.Config} */
const config = withNuxt({
  rules: {
    'no-console': 'error',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'no-multi-spaces': 'error',
    'space-before-function-paren': ['error', 'always']
  }
});

export default config;
