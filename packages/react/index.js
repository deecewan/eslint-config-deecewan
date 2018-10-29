module.exports = {
  extends: ['airbnb', require.resolve('@deecewan/eslint-config-base')],
  rules: {
    /* use jsx for React files */
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    /*
     * To make testing easier, I export both the component alone, and the
     * `connect`ed component (as the default). When I import this for use,
     * however, I want to use the original component name as the import name
     */
    'import/no-named-as-default': 0,
    /* enforce the order of React classes */
    'react/sort-comp': [2, {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        '/^on.+$/', // event handlers
        'rendering' //
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render'
        ]
      }
    }],
  }
}
