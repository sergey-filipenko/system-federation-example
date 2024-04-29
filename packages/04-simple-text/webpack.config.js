const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",

  optimization: {
    minimize: false
  },

  output: {
    publicPath: "http://localhost:3004/",
    libraryTarget: "system"
  },

  resolve: {
    extensions: [".js", ".json"]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_four",
      library: { type: "system" },
      filename: "remoteEntry.js",
      exposes: {
        './app': "./src/index"
      },
      shared: ["react", "react-dom"]
    }),
    new CopyPlugin([
      { from: 'public', to: '.' }
    ])
  ]
};
