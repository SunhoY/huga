const appRoot = require('app-root-path').path;
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ['babel-polyfill', `${appRoot}/src/server.js`],
    output: {
        path: `${appRoot}/dist`,
        filename: 'server.bundle.js',
    },
    target: 'node',
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=env&presets[]=react' }
        ]
    },
    externals: nodeExternals(),
    devtool: "source-map"
};