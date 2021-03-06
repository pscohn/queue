module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: './static/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },
  resolve: {
   extensions: ['', '.js', '.jsx'],
 }
};
