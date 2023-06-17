// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
  entry: './src/js/index.js', // 진입점 파일 설정
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'), // 결과 파일 경로
    filename: 'bundle.js', // 결과 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|pages)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: { import: true },
          },
        ],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // .js 확장자 생략 가능하도록 등록
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new MiniCssExtractPlugin(),
  ],
};
