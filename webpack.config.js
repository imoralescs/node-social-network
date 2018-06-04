const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const plugins = [
  new CleanWebpackPlugin(['dist/js'], {
    verbose: true
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/server/views/index.html'),
    filename: 'index.html',
    inject: 'body'
  })
]

module.exports = {
    entry: [
        'babel-polyfill',
        './src/client'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: plugins
}