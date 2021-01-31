const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        __dirname + '/src/ts/index.ts',
        __dirname + '/src/scss/index.scss'
    ],
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                exclude: /node_modules/,
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].min.css',
                            outputPath: 'css/'
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.scss', '.ts', '.tsx']
    },
    output: {
        filename: 'js/bundle.min.js',
        path: resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            files: {
                js: [ 'bundle.min.js' ]
            },
            inject: false,
            template: 'src/html/index.html',
            title: 'Webpack Template'
        })
    ]
}