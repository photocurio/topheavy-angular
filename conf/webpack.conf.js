const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FailPlugin = require('webpack-fail-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    loaders: [{
        test: /.json$/,
        loader: 'json-loader'
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ng-annotate-loader'
      },
      {
        test: /.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    FailPlugin,
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    new webpack.ProvidePlugin(
      {
        'window.jQuery': 'jquery'
      }
    ),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      },
      debug: true
    }),
    new ExtractTextPlugin('styles.css')
  ],
  // devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
  },
  entry: `./${conf.path.src('index')}`
};
