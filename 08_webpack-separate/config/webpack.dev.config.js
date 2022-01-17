const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.comm.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, './public'),
    hot: true,
    // host: '0.0.0.0',
    port: 7777,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        pathRewrite: {
          '^/api': ''
        },
        secure: false,
        changeOrigin: true
      }
    }
  }
})