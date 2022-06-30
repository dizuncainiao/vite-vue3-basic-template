module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
    'stylelint-config-standard-vue',
  ],
  overrides: [
    {
      files: '**/*.less',
      customSyntax: 'postcss-less',
      extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-less',
        'stylelint-config-recess-order',
      ],
    },
  ],
}
