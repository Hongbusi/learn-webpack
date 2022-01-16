const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    // assetModuleFilename: 'img/[name]-[hash:6].[ext]'
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
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       outputPath: 'img',
      //       name: '[name]-[hash:6].[ext]',
      //       limit: 100 * 1024
      //     }
      //   }
      // },
      // asset module type
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]-[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      }
    ]
  }
}
