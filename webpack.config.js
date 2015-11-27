var webpack = require('webpack');
var merge = require('webpack-merge');

var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

var common = {
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  entry: PATHS.app,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      include: PATHS.app
    }, {
      test: /\.jsx$/,
      loader: 'babel',
      include: PATHS.app
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Kanban App'
    })
  ]
};

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

if (TARGET === 'start' || !TARGET) {

}
