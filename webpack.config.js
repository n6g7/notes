const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './index.js'
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@notebooks': path.resolve(__dirname, 'notebooks'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@templates': path.resolve(__dirname, 'src/components/templates')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.ipynb$/,
        use: [
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
        test: /\.(svg|png|jpe?g|gif)$/,
        use: [
          'url-loader',
          'img-loader'
        ]
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
}
