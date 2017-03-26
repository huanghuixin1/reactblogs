var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath,
        // chunkFilename: '[id].js?[hash]',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/,
            //     loader: 'eslint-loader',
            //     enforce: "pre",
            //     options: {
            //         formatter: require('eslint-friendly-formatter')
            //     }
            // },
            {
                test:/\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')],
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
            },
            {
                test:/\.(scss|css)$/,
                loader: 'sass-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}
