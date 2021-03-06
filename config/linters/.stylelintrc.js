module.exports = {
  'plugins': [
    'stylelint-scss'
  ],
  'rules': {
    'at-rule-no-unknown': null,
    'indentation': 2,
    'number-leading-zero': null,
    'unit-whitelist': [
      ['em', 'rem', 'deg', 's', 'fr'],
      { 'ignoreProperties': {
        '%': ['/width|height|flex|transform|left|right|bottom|top/'],
        'px': ['/border|box|transform|padding|margin|grid|width|height|top|right|bottom|left/']
      }}
    ],
    // SCSS
    'scss/no-duplicate-dollar-variables': true,
    'scss/media-feature-value-dollar-variable': 'always',
    'scss/at-rule-no-unknown': true,
  }
}