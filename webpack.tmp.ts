import path from 'path';
import nodeExternals from 'webpack-node-externals';
import LoadablePlugin from '@loadable/webpack-plugin';

const DIST_PATH = path.resolve(__dirname, 'public/dist');
const production = process.env.NODE_ENV === 'production';
const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const getConfig = (target: string) => ({
  name: target,
  mode: development ? 'development' : 'production',
  target,
  entry: `./src/client/main-${target}.js`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
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
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          onlyLocals: true,
        },
      },
    ],
  },
  optimization: {
    moduleIds: 'named',
    chunkIds: 'named',
  },
  externals:
    target === 'node' ? ['@loadable/component', nodeExternals()] : undefined,
  output: {
    path: path.join(DIST_PATH, target),
    // filename: production ? '[name]-bundle-[chunkhash:8].js' : '[name].js',
    filename: production ? '[name].js' : '[name].js',
    publicPath: `/dist/${target}/`,
    libraryTarget: target === 'node' ? 'commonjs2' : undefined,
  },
  plugins: [new LoadablePlugin()],
});

export default [getConfig('web'), getConfig('node')];
