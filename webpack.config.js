const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    "./src/raw_components/index.html",
    './src/raw_components/to-do-app.js'
  ],
  output: {
    filename: 'to-do-app.js',
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