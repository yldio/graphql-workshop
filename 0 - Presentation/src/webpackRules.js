module.exports = [
  {
    test: /\.svg$/,
    use: [{ loader: 'babel-loader' }, { loader: 'react-svg-loader' }]
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }
  }
]
