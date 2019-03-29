const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Web Components',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html/, 
        loader: 'file-loader?name=./[name].[ext]', 
      },
      {
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules\/(?!(@webcomponents\/shadycss|lit-element|lit-html)\/).*/,
				options: {
					cacheDirectory: true
				}
			},
    ]
  }
};