const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.jsx') //index.js или своёНазвание.js
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: '',
    filename: path.join('js', 'bundle.js')
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            ["@babel/plugin-proposal-class-properties", { "loose": true }]
          ],
          // preset: ["@babel/preset-env", "@babel/preset-react"] это можно использовать вместо .babelrc
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src', 'styles'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@containers': path.resolve(__dirname, 'src', 'components', 'containers'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@img': path.resolve(__dirname, 'src', 'resources', 'img'),
      '@actions': path.resolve(__dirname, 'src', 'Core', 'Store', 'actions'),
      '@middleware': path.resolve(__dirname, 'src', 'Core', 'middleware'),
      '@database': path.resolve(__dirname, 'server', 'db'),
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join('style', '[name].css'),
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  devServer: {
    port: 3300,
    hot: true,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:9090',
        pathRewrite: { '^/api' : '' },
        secure: false,
        changeOrigin: true
      }
    }
  }
};