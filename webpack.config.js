var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var webpack = require('webpack');

config = {
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'public/src/app'),
      Common: path.resolve(__dirname, 'public/src/app/common'),
      Public: path.resolve(__dirname, 'public/src/app/public')

    }
  },

  module: {
    rules: [
      {test:/\.html$/, use: 'html-loader'}
    ]
  },

  entry: {
    app: './public/src/main.js',
    appearence: './public/src/appearence.js'
  },

  output: {
    path: __dirname + '/public/dist',
    filename: '[name].js'
  },

  plugins: [
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['public']},
          // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        // proxy: 'http://localhost:3100/'
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    ),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ]
}

module.exports = config;