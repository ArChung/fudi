const path = require('path');
const packageJson = JSON.stringify(require('../package.json'));
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  theme: path.join(__dirname, '../src/views/' + packageJson.name)
};
export default {
  path,
  packageJson,
  PATHS
};
