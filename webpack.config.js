const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/images'),
      '@notebooks': path.resolve(__dirname, 'notebooks'),
      '@services': path.resolve(__dirname, 'src/services')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.ipynb$/,
        exclude: /node_modules/,
        use: [
          'file-loader',
          'extract-loader',
          'html-loader',
          'ipynb-loader?cellsOnly=true'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|svg)$/,
        use: [
          'url-loader',
          'img-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
}
