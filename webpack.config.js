var webpack = require('webpack');
var path = require('path');

var publicPath = '/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    entry: {
        page1: ['./client/page1', hotMiddlewareScript],
        page2: ['./client/page2', hotMiddlewareScript],
    },
    output: {
        filename: './[name]/bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: publicPath
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = devConfig;