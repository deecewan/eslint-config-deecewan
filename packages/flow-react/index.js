const react = require('@deecewan/eslint-config-react');

const sort = react.rules['react/sort-comp'];
sort[1].order = ['type-annotations'].concat(sort[1].order)

module.exports = {
  extends: [
     '@deecewan/eslint-config-flow',
     '@deecewan/eslint-config-react',
  ].map(require.resolve),
  rules: {
    'react/sort-comp': sort,
  },
};
