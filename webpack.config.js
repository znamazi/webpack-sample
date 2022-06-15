const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CSSExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.ENV_MODE !== 'production'

module.exports = {
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    }
  },
  // Entry
  entry: {
    appName: path.resolve(__dirname, 'src/index.js') // change appName into you appName
  },

  // Output
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].bundle.js'
  },

  // Loader
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /.css$/i,
        use: [
          devMode ? 'style-loader' : CSSExtractPlugin.loader,
          { loader: 'css-loader', options: { modules: true } }

          //   to support css module ----options: { modules: true }
        ]
      },
      { test: /.(png|svg|jpe?g|gif|ttf|eot|woff|woff2)$/i, type: 'asset' }
    ]
  },

  // Plugin
  plugins: [
    new CSSExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Web APP By Webpack',
      filename: path.join(__dirname, 'public/index.html'),
      template: path.join(__dirname, 'src/index.html')
    })
  ],

  // DevServer
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9090
  }
}
