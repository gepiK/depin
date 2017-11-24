var path = require('path');
var webpack = require('webpack');
var config = require('../config');
module.exports = {
  // 你想要打包的模块的数组
  entry: {
    vendor: ['vue/dist/vue', 'lodash', 'vue-router', 'element-ui']
  },
  output: {
    path: path.resolve(__dirname, '../static/js'),
    filename: '[name].dll.js',
    library: '[name]_library'
    // vendor.dll.js中暴露出的全局变量名。
    // 主要是给DllPlugin中的name使用，
    // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      path: '[name].manifest.json',
      name: '[name]_library',
      context: '.'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
