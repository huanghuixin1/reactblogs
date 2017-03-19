var path = require('path');
var webpack = require('webpack');
module.exports = {
    debug: true,
    watch: true,
    devtool: "cheap-module-eval-source-map",
    entry: {
        'index.entry': "./src/index.entry.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
                // test: /\.js?$/,
                // exclude: /node_modules/,
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['es2015', 'react']
                //     }
                // }
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};
