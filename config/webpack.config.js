const path = require('path');
const CONFIG = require('./index');

const globalStyleSheetPath = path.join(CONFIG.APP_ROOT, 'stylesheet');

const createStyleModuleLoader = function (useCssModule) {
  return [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader',
    query: useCssModule ? {
      modules: true,
      localIdentName: '[name]__[local]__[hash:base64:5]'
    } : {
      modules: false
    }
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: function () {
        return [
          require('autoprefixer')
        ];
      }
    }
  }, {
    loader: 'sass-loader'
  }]
}

module.exports = {
  entry: path.join(CONFIG.APP_ROOT, 'index.js'),
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.js']
  },
  output: {
    path: CONFIG.BUILD_PATH,
    filename: 'bundle.js'
  },
  module : {
    loaders : [{
      test: /\.js$/,
      include: CONFIG.APP_ROOT,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      include: globalStyleSheetPath,
      use: createStyleModuleLoader(false)
    }, {
      test: /\.scss$/,
      include: CONFIG.APP_ROOT,
      exclude: globalStyleSheetPath,
      use: createStyleModuleLoader(true)
    }, {
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      query: {
        name: '[name]_[hash]'
      }
    }]
  }
};
