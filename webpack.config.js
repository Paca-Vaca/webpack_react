var webpack = require('webpack');

var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: process.env.HOST,
    port: process.env.PORT
  },
  module: {
    loaders: [{
        test: '/\.css$/',
        loader: 'style-loader!css-loader',
        include: PATHS.app
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Kanban App'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
