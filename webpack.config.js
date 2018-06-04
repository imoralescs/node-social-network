const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        'babel-polyfill',
        './src/client'
    ],
    output: {
        path: path.join(__dirname, 'src/server/public'),
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
    plugins: []
}