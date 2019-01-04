const path  = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry : {
    app: "./src/index.js",
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
   module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/, use:["style-loader","css-loader","sass-loader"]
      }
    ]
  },
  
  devServer: {
    contentBase: "./dist",
    hot : true
  },
  plugins: [new HtmlWebpackPlugin({
    template: "index.html"
  }),
  new webpack.HotModuleReplacementPlugin()
],
}; 