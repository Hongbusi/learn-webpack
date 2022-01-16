const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      },
      // file-loader
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       outputPath: 'img',
      //       name: '[name]-[hash:6].[ext]'
      //     }
      //   }
      // },
      // url-loader
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'img',
            name: '[name]-[hash:6].[ext]',
            limit: 100 * 1024
          }
        }
      }
    ]
  }
}
