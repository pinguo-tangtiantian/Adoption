//在终端中输入webpack命令时是自动读取webpack.config.js
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var webpackConfig = {
    entry: {},
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }, {
            test: /\.css?$/,
            loader: 'style-loader!css-loader'
        }]
    },
    devtool: 'eval',
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        /* new CleanWebpackPlugin(
            ['public'],
            {
                root: __dirname,
                verbose: true,
                dry: false
            }
        ) */
    ],
    devServer: {
        contentBase: './public',
        port: '3000',
        hot: true,
        inline: true
    }
}

//获取指定路径下的入口文件
function getEntries(globPath) {
    var files = glob.sync(globPath);
    var entries = {};
    files.forEach(function (filePath) {
        var split = filePath.split('/');
        var name = split[split.length - 2];
        entries[name] = './' + filePath;
    });
    return entries;
}

var entries = getEntries('app/pages/**/index.tsx');

Object.keys(entries).forEach(function(name){
    webpackConfig.entry[name] = entries[name];
    var plugin = new HtmlWebpackPlugin({
        filename: name+'.html',
        template: './app/pages/index.tmpl.html',
        inject: true,
        chunks: [name]
    });
    webpackConfig.plugins.push(plugin);
});

module.exports = webpackConfig;