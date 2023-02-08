require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  env: {
    node: true,
    es2022: true,
  },
  plugins: ['simple-import-sort', 'import'],
  rules: {
    eqeqeq: 'error',
    'logical-assignment-operators': 'error',
    'multiline-comment-style': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-lonely-if': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'operator-assignment': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { array: false, object: true }],
    'prefer-exponentiation-operator': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'spaced-comment': 'error',
    yoda: ['error', 'always', { onlyEquality: true }],

    // eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // eslint-plugin-import
    'import/no-useless-path-segments': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
}
