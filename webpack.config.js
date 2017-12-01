const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'scss-bundle': './app/04-advanced/04-scss/style.scss',
        'less-bundle': './app/04-advanced/05-less/style.less',
        'uncss-bundle': './app/04-advanced/07-uncss/style.css',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './wpk')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                // use: 'css-loader?minimize&sourceMap!sass-loader?sourceMap'
                use: 'css-loader?sourceMap!sass-loader?sourceMap'
            })
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                // use: 'css-loader?minimize&sourceMap!less-loader?sourceMap'
                use: 'css-loader?sourceMap!less-loader?sourceMap'
            })
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                // use: 'css-loader?minimize&sourceMap!less-loader?sourceMap'
                use: 'css-loader?sourceMap!postcss-loader'
            })
        }]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}