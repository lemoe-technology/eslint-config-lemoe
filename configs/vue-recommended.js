module.exports = {
  extends: ['./base', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'vue/block-tag-newline': { singleline: 'always', multiline: 'always', maxEmptyLines: 1 },
    'vue/component-name-in-template-casing': 'kebab-case',
    'vue/component-options-name-casing': 'error',
    'vue/custom-event-name-casing': 'error',
    'vue/define-macros-order': 'error',
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/html-comment-indent': 'error',
    'vue/new-line-between-multi-line-property': 'error',
    'vue/next-tick-style': 'error',
    'vue/no-boolean-default': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-required-prop-with-default': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-prop-type-boolean-first': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/require-direct-export': 'error',
  },
}
