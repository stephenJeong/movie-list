const path = require('path');

module.exports = {
  entry: './client/src/components/Index.jsx',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        // options: {
        //   presets: ['react', 'es2015']
        // }
      }
    ]
  }
};