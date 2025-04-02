const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        main: './src/index.js',
        stat: './src/statistics.js'
    },
    output: {
        filename: '[name].bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200,
        hot: false
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.png'),
                    to: path.resolve(__dirname, 'dist'),
                }
            ]
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[hash][ext]',
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[hash][ext]'
                }
            }
        ]
    },
    externals: {
        moment: 'moment'
    }
};