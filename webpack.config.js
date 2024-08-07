// webpack.config.js
const path = require('path');
const Dotenv = require('dotenv-webpack');
const WebpackObfuscator = require('webpack-obfuscator');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.js', // Adjust this path to your main JS file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
 devServer: {
  historyApiFallback: true,
 
  // ...
},
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new VueLoaderPlugin(),
    // new WebpackObfuscator({
    //   rotateStringArray: true
    // }, ['excluded_bundle_name.js']),
    new HtmlWebpackPlugin({
      template: 'index.html', // Path to your index.html file
    }),
    new VueLoaderPlugin()
  ], 
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify")
    },
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js' // Para Vue 3
    }
  },
  mode: 'development'
};
