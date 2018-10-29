module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['jest', 'prettier', 'eslint-comments'],
  env: {
    'jest/globals': true,
  },
  rules: {
    /* these are likely a smell - they can be explictly disabled where necessary
     * making it annoying will make them used less
     */
    'no-console': 2,
    /* do not allow disabled tests */
    'jest/no-disabled-tests': 2,
    /* do not allow `.only`, etc, tests */
    'jest/no-focused-tests': 2,
    /* do not allow tests to have the same titles */
    'jest/no-identical-title': 2,
    /* ensure that `expect` has been called correctly */
    'jest/valid-expect': 2,
    /* if you disable an eslint rule, you must re-enable it */
    'eslint-comments/disable-enable-pair': 2,
    /* duplicate disables is probably a sign of a mistake */
    'eslint-comments/no-duplicate-disable': 2,
    /* if you're disabling a line, you need to specify which rule explicitly */
    'eslint-comments/no-unlimited-disable': 2,
    /* you should not keep lines disabled when they have no errors */
    'eslint-comments/no-unused-disable': 2,
    /* sanity check to ensure you're re-enabling the correct rules */
    'eslint-comments/no-unused-enable': 2,
  },
};
