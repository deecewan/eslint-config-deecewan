const fs = require('fs');
const path = require('path');
const { CLIEngine } = require('eslint');

const packagesDir = path.join(process.cwd(), 'packages');

fs.readdir(packagesDir, (err, folders) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw new Error('Failed to run tests. See message for why.');
  }

  // we're just going to map over the folders, run the config that exists
  // in each of them, and make sure they pass
  folders.forEach((folder) => {
    // eslint-disable-next-line no-console
    console.log(`--> Running with @deecewan/eslint-config-${folder}`);
    const runner = new CLIEngine({
      useEslintrc: false, // we only care about the one under test
      cwd: path.join(process.cwd(), 'tests', 'fixtures'),
      /* eslint-disable global-require, import/no-dynamic-require */
      baseConfig: require(path.join(packagesDir, folder, 'index.js')),
      /* eslint-enable global-require import/no-dynamic-require */
    });

    const report = runner.executeOnFiles(['.']); // look through the fixtures directory

    // eslint-disable-next-line no-console
    console.log(
      `<- Passed with ${report.errorCount} errors and ${
        report.warningCount
      } warnings.`,
    );
  });
});
