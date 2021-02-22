const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
    entry: './FRONTEND/index',
    output: {
      path: path.resolve(__dirname, 'BACKEND/public'),
      filename: 'js/main.js'
    },
    plugins: [
      new htmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'FRONTEND/views/index.html'),
        minify:{
          collapseWhitespace: true,
          removeRedundantAttributes:true,
          removeco:true,
          removeStyleLinkTypeAttributes: true,
          removeScriptTypeAttributes: true,
          useShortDoctype: true
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        },
        {
          test: /\.(svg|png|jpg)$/,
          use:
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
                output: {
                  path: path.join(__dirname, 'public/images')
                },
                useRelativePath: true
              }   
            }
        }
      ]
    },
    devtool: 'source-map'
};