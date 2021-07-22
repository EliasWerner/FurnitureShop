import webpack from 'webpack';
const LoadablePlugin = require('@loadable/webpack-plugin');

const clientConfig: webpack.Configuration = {
  name: 'client',
  mode: 'development',
  entry: ['webpack-hot-middleware/client', './src/client.tsx'],
  output: {
    publicPath: '/static/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              plugins: ['react-hot-loader/babel'],
            },
          },
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
        // options: {
        //   limit: 10000,
        //   name: '[name].[hash:8].[ext]',
        // },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    moduleIds: 'named',
  },

  plugins: [
    new LoadablePlugin({
      filename: './server/react-loadable.json',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export default clientConfig;
