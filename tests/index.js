const fs = require('fs');
const path = require('path');
const { CLIEngine } = require('eslint');

const packagesDir = path.join(process.cwd(), 'packages');

fs.readdir(packagesDir, (err, folders) => {
  if (err) {
    console.error(err);
    throw new Error('Failed to run tests. See message for why.');
  }

  // we're just going to map over the folders, run the config that exists
  // in each of them, and make sure they pass
  folders.forEach((folder) => {
    console.log(`--> Running with @deecewan/eslint-config-${folder}`);
    const runner = new CLIEngine({
      useEslintrc: false, // we only care about the one under test
      cwd: path.join(process.cwd(), 'tests', 'fixtures'),
      baseConfig: require(path.join(packagesDir, folder, 'index.js')),
    });

    const report = runner.executeOnFiles(['.']); // look through the fixtures directory
    console.log(`<- Passed with ${report.errorCount} errors and ${report.warningCount} warnings.`);
  });
});
