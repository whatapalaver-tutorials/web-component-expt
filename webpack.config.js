const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    "./src/index.html",
    './src/index.js'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
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