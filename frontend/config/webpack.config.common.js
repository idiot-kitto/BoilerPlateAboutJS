const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|jpeg|png|gif|ico)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'images/[name][ext]',
                },
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg|ico)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 publicPath: '/',
            //                 name: '[name].[ext]?[hash]',
            //             },
            //         },
            //     ],
            // },
            // {
            //     test: /\.(png|jpe?g|gif|svg|ico)$/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             publicPath: '/',
            //             name: '[name].[ext]?[hash]',
            //             limit: 5000,
            //         },
            //     },
            // },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};