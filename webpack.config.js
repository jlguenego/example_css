const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var less = require('less');

less.render('.class { width: (1 + 1) }', {
        paths: ['.', './lib'], // Specify search paths for @import directives
        filename: 'style.less', // Specify a filename, for better error messages
    },
    function (e, output) {
        console.log(output.css);
    });

module.exports = {
    entry: {
        vendor: './app/05-maite/04-webpack',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './app/wpk')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
            }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?minimize&sourceMap'
            })
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?minimize&sourceMap!sass-loader?sourceMap'
            })
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }],
        }, {
            test: /\.jpg$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    publicPath: './wpk/'
                }
            }]
        }, {
            test: /\.png$/,
            use: ['url-loader?mimetype=image/png']
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    // publicPath: './wpk/',
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            }]
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    // publicPath: './wpk/',
                    limit: 10000,
                    mimetype: 'application/octet-stream'
                }
            }]
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: './wpk/'
                }
            }]
        }, {
            test: /(fontawesome-webfont|glyphicons-halflings-regular)\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    // publicPath: './wpk/',
                    limit: 10000,
                    mimetype: 'image/svg+xml'
                }
            }]
        }]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        }),
    ]
}