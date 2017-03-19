var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: false,
    entry: {
        'index.entry': path.resolve(__dirname, "./src/index.entry.js")
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                // test: /\.(js|jsx)$/,
                // exclude: /node_modules/,
                // use: 'babel-loader',
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-3', 'stage-1'],
                        plugins: [
                            // ["import", [
                            //     {
                            //         "libraryName": "antd",
                            //         "libraryDirectory": "lib",   // default: lib
                            //         "style": false
                            //     }
                            // ]],
                            "transform-decorators-legacy"],
                    }
                }
            },
            {}
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};