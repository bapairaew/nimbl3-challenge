const path = require('path');

module.exports = {
  APP_ROOT: path.join(process.cwd(), 'app'),
  BUILD_PATH: path.join(process.cwd(), 'build'),
  PUBLIC_PATH: path.join(process.cwd(), 'public')
};
