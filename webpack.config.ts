const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.tsx',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.[t|j]sx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true
  }
};
