module.exports = {
  extends: require.resolve('@deecewan/eslint-config-base'),
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  rules: {
    /* flow type assertions don't play nicely here */
    'no-unused-expressions': 0,
    /* this rule respects type cast expressions */
    'flowtype/no-unused-expressions': 2,
    /* flowtype linting rules */
    /* enforce boolean naming style */
    'flowtype/boolean-style': [2, 'boolean'],
    /* defines types so they can be used by other rules */
    'flowtype/define-flow-type': 1,
    /* use the same comma dangle rules as objects */
    'flowtype/delimiter-dangle': [2, 'always-multiline'],
    /* no spaces allowed inside generic annotations */
    'flowtype/generic-spacing': [2, 'never'],
    /* no duplicate keys in type definitions */
    'flowtype/no-dupe-keys': 2,
    /* don't use primitive constructors as types */
    'flowtype/no-primitive-constructor-types': 2,
    /* flow can only be used in files marked as flow - removes 'forgot to set' errors */
    'flowtype/no-types-missing-file-annotation': 2,
    /* disallow `any`, `Object` and `Function` types - they don't provide a strict enough interface */
    'flowtype/no-weak-types': 2,
    /* flow allows semis or commas in definitions - we want commas */
    'flowtype/object-type-delimiter': [2, 'comma'],
    /* don't force every parameter to be typed - we can rely on inference a little */
    'flowtype/require-parameter-type': 0,
    /* don't force every return value to be typed - we can rely on inference a little */
    'flowtype/require-return-type': 0,
    /* enforce flow annotations - greenfield project where everything should be typed */
    'flowtype/require-valid-file-annotation': [
      2,
      'always',
      { annotationStyle: 'block' },
    ],
    /* not every variable needs to be typed - the inference is pretty good */
    'flowtype/require-variable-type': 0,
    /* require semi-colons *everywhere* */
    'flowtype/semi': [2, 'always'],
    /* sort the keys in type definitions */
    'flowtype/sort-keys': [2, 'asc'],
    /* require a space before the type */
    'flowtype/space-after-type-colon': [2, 'always'],
    /* require no space before the generic bracket */
    'flowtype/space-before-generic-bracket': [2, 'never'],
    /* require no space before type colon */
    'flowtype/space-before-type-colon': [2, 'never'],
    /* enforce consistent spacing around union types */
    'flowtype/union-intersection-spacing': [2, 'always'],
    /* marks flow types as used - used to work with other rules */
    'flowtype/use-flow-type': 2,
  },
};
