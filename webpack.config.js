var webpack = require('webpack');
var path = require('path');

var publicPath = '/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    entry: {
        guide: ['./client/pages/guide/index.tsx', hotMiddlewareScript],
        home: ['./client/pages/home/index.tsx', hotMiddlewareScript],
        upload: ['./client/pages/upload/index.tsx', hotMiddlewareScript],
    },
    output: {
        filename: './[name]/bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: publicPath
    },
    devtool: 'eval',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
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