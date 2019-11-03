const glob = require('glob');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');

const pages = require('./webpack.pages.js');

const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map(
    dir => new HTMLWebpackPlugin({
        filename: path.basename(dir), // Output
        template: dir, // Input
    }),
);

module.exports = {
    node: {
        fs: 'empty',
    },
    entry: ['./src/index.js', './src/style/main.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
            },
            {
                test: /\.(njk|nunjucks)$/,
                use: ['nunjucks-loader'],
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192 // This will make sure that large image(>8kb) doesn't get bined with css as binary code
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/'
                    }
                }]
            }
        ],
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/assets/',
            to: './assets/',
        }, ]),
        new NunjucksWebpackPlugin({
            templates: pages.generatePages(path.resolve(__dirname, './src/views/pages/'))
        }),
    ],
    stats: {
        colors: true,
    },
    devtool: 'source-map',
};
