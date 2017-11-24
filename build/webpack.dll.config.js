var path = require('path');
var webpack = require('webpack');
var config = require('../config');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  // 你想要打包的模块的数组
  entry: {
    vendor: ['vue/dist/vue', 'lodash', 'vue-router', 'element-ui']
  },
  output: {
    path: path.resolve(__dirname, '../static'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..')
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, '../static', '[name]-manifest.json'),
      name: '[name]_library'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
