// tslint:disable:object-literal-sort-keys
import webpack from 'webpack';
const nodeExternals = require('webpack-node-externals');

const serverConfig: webpack.Configuration = {
  name: 'server',
  context: __dirname,
  mode: 'production',
  entry: ['./server/render.tsx'],
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: __dirname + '/build/server',
    publicPath: '/static/',
    libraryTarget: 'commonjs2',
    filename: 'render.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                module: 'esnext',
                target: 'esnext',
              },
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset/resource',
        options: {
          limit: 10000,
          emitFile: false,
          name: '[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          onlyLocals: true,
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};

export default serverConfig;
