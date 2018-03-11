const appRoot = require('app-root-path').path;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: `${appRoot}/src/browser.js`,
    output: {
        path: `${appRoot}/dist`,
        filename: 'dev.bundle.js'
    },
    module: {
        rules: [
            {
                test: /(\.js)|(\.jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${appRoot}/src/html/template.html`
        }),
    ],
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                pathRewrite: {"^/api": ""}
            }
        },
        contentBase: `${appRoot}/dist`,
        port: 3000,
        inline: true,
        historyApiFallback: true,
    }
};