const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: "./src/App.js",
  },
  output: {
    path: __dirname + "/public/js",
    filename: "[name].js",
  },
  devServer: {
    contentBase: __dirname + "/public",
    port: 8080,
    publicPath: "/js/",
  },
  devtool: "eval-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: false }
          },
          'sass-loader'
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './src/pages/kyudo-table.css',  // styles/app.cssに出力される？
    })
  ],
};
