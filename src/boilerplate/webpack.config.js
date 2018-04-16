const path = require('path')
const appDir = path.resolve(__dirname, '..', '..')

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
    entry: path.resolve(appDir, 'src', 'boilerplate', 'client.js'),
    output: {
      filename: 'main.js',
      path: path.resolve(appDir, 'build', 'client')
    },
    module: moduleConf,
    mode: 'development'
  },

  {
    entry: path.resolve(appDir, 'src', 'boilerplate', 'server.js'),
    output: {
      filename: 'server.js',
      path: path.resolve(appDir, 'build', 'server')
    },
    externals: [ require('webpack-node-externals')() ],
    target: 'node',
    module: moduleConf,
    mode: 'development'
  }

]
