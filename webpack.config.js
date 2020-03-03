const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals');

var config = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['src', 'node_modules'],
  },
};

var client = Object.assign({}, config, {
  name: 'client',
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  entry: path.resolve(__dirname, './src/client/index.tsx'),
});

var server = Object.assign({}, config, {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  entry: path.resolve(__dirname, './src/server/index.tsx'),
});

module.exports = [client, server];
