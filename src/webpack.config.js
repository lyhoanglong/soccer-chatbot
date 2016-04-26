module.exports = {
  preLoaders: [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint-loader"
  }],
  loaders: [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader"
  }],
  resolve: {
    extensions: ["", ".js"]
  }
}