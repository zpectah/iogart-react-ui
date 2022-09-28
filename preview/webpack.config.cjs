const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const targetPath = path.resolve(__dirname, '../.preview');
const serverPort = 3232;
const serverHost = 'localhost';

const config = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  entry: './index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './index.html',
          to: targetPath,
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    fallback: { path: false },
  },
  output: {
    path: targetPath,
    filename: 'index.js',
    publicPath: '/',
  },
  devServer: {
    static: targetPath,
    port: serverPort,
    host: serverHost,
    compress: true,
    historyApiFallback: true,
  },
  stats: 'minimal',
  performance: {
    hints: false,
  },
};

module.exports = config;
