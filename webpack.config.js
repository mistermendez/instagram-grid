var webpack = require('webpack');
var path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: './client.js',
    output: {
        path: path.join(process.cwd(), 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            //{ test: /\.css$/, loader: 'style!css' },
            { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
            { test: /\.js$/, loader: "jsx-loader?harmony" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin()
    ]
};
