const merge = require('lodash.merge');
const flow = require('@deecewan/eslint-config-flow');
const react = require('@deecewan/eslint-config-react');

const merged = merge({}, flow, react);

// for some reason, the plugins aren't merged correctly
merged.plugins = flow.plugins.concat(react.plugins);

// update the 'react/sort-comp' rule to include types first
const sort = merged.rules['react/sort-comp'];
sort[1].order = ['type-annotations'].concat(sort[1].order)
merged.rules['react/sort-comp'] = sort;

module.exports = merged;
