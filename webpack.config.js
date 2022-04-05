
module.exports = {
  entry: './src/main.js',
  mode: 'production',
  watch: true,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // CSS/SASS file bundler
      {
        test: /\.(css|scss)$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
      },
      // Image file bundler
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          { loader: 'file-loader' }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            // Fallback to file-loader if file exceeds this value in bytes
            limit: 8192
          }
        }
      }
    ]
  }
};