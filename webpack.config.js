const path = require('path')

moduleConf = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env'],
          plugins: ['transform-react-jsx']
        }
      }
    }
  ]
}

module.exports = [

  {
    entry: './client.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'build', 'client')
    },
    module: moduleConf,
    mode: 'development'
  },

  {
    entry: './server.js',
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'build', 'server')
    },
    externals: [ require('webpack-node-externals')() ],
    target: 'node',
    module: moduleConf,
    mode: 'development'
  }

]
