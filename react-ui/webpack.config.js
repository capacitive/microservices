const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebPackDevServer = require('webpack-dev-server');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = process.env.NODE_ENV === 'production';

const path = require('path');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  devServer: {
    port: 3000,
    liveReload: true,
    open: {
      target: ['http://localhost:3031'],
      app: {
        name: 'firefox',
        arguments: ['--incognito', '--new-window']
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html',
        }),
        new MiniCssExtractPlugin(),
      ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

// const prod = process.env.NODE_ENV === 'production';

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   mode: prod ? 'production' : 'development',
//   entry: './src/index.tsx',
//   output: {
//     path: __dirname + '/dist/',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         exclude: /node_modules/,
//         resolve: {
//           extensions: ['.ts', '.tsx', '.js', '.json'],
//         },
//         use: 'ts-loader',
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//     ]
//   },
//   devtool: prod ? undefined : 'source-map',
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'index.html',
//     }),
//     new MiniCssExtractPlugin(),
//   ],
// };