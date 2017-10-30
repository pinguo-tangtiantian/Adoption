var webpack = require("webpack");
var path = require("path");
// var HtmlWebpackPlugin = require('html-webpack-plugin');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
    entry: {
        index: ['./public/javascripts/common.js', hotMiddlewareScript]
    },
    output: {
        filename: 'bundle-[name].js',
        path: path.resolve('./public/build'),
        publicPath: publicPath
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
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

}