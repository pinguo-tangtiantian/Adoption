//在终端中输入webpack命令时是自动读取webpack.config.js
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app/page/index.tsx',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, './public')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        },{
            test: /\.css?$/,
            loader: 'style-loader!css-loader'
        }]
    },
    devtool: 'eval',
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/page/index.tmpl.html',
            inject: 'body',
            filename: 'index.html'
        })
    ],
}