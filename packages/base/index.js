module.exports = {
  extends: "airbnb-base",
  plugins: [
    "jest",
  ],
  env: {
    "jest/globals": true,
  },
  rules: {
    /* these are likely a smell - they can be explictly disabled where necessary
     * making it annoying will make them used less
     */
    "no-console": 2,
    /* do not allow disabled tests */
    "jest/no-disabled-tests": 2,
    /* do not allow `.only`, etc, tests */
    "jest/no-focused-tests": 2,
    /* do not allow tests to have the same titles */
    "jest/no-identical-title": 2,
    /* ensure that `expect` has been called correctly */
    "jest/valid-expect": 2,
  }
}
