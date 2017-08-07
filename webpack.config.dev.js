const DashboardPlugin = require('webpack-dashboard/plugin')

const baseConfig = require('./webpack.config')

module.exports = Object.assign(
  {},
  baseConfig,
  {
    plugins: [
      new DashboardPlugin()
    ],
    devServer: {
      contentBase: './dist'
    }
  }
)
