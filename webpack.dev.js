const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devServer: {
        contentBase: 'src',
        watchContentBase: true,
        hot: true,
        open: true,
        port: process.env.PORT || 9001,
        host: process.env.HOST || 'localhost',
    },
    module: {
        rules: [{
            test: /\.(sass|scss)$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ],
        }, ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ]
});
