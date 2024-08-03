// webpack.config.js
const path = require('path');
const Dotenv = require('dotenv-webpack');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: './src/index.js', // Adjust this path to your main JS file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
  plugins: [
    new Dotenv(),
    new WebpackObfuscator({
      rotateStringArray: true
    }, ['excluded_bundle_name.js'])
  ], 
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify")
    }
  },
  mode: 'production'
};
