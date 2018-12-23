var webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path")

module.exports = {
	mode : 'development',
	entry : "./src/app.js",
	devtool: 'inline-source-map',
	devServer: {
		contentBase : "./build"
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},
	plugins: [
      new HtmlWebpackPlugin({
        title: 'Firework-2019'
      })
    ],
}