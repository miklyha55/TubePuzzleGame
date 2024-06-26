const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin: CleanWebpackPlugin,
} = require("clean-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const entryPoint = path.resolve(__dirname, "./api/index.js");
const DEVELOPMENT = process.env.NODE_ENV === "development";

module.exports = {
  entry: entryPoint,

  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "../dist/"),
    filename: "[name].bundle.js",
  },

  mode: "development",

  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist/"),
    },
    allowedHosts: "all",
    historyApiFallback: !0,
    open: !0,
    compress: !0,
  },

  plugins: DEVELOPMENT
    ? [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./layouts/index.html"),
        filename: "index.html",
      }),
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ]
    : [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./layouts/index.pug"),
        filename: "ANY" + "/index.html",
        inject: false,
      }),
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin(),
    ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      safari: "11.1",
                      firefox: "50",
                      android: "50",
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|ttf|eot|wav|mp3|webp|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: ["base64-inline-loader"],
      },
      {
        test: /\.(gif)$/i,
        use: ["url-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      }
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: { fs: false },
  },
};
