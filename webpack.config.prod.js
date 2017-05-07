//
//  jonathanballands.me
//  webpack.config.prod.js
//
//  © 2017 Jonathan Ballands
//

const path = require('path');
const webpack = require('webpack');

// -----------------------------------------------------------------------------

module.exports = {
    entry: {
        'bundle': './src/js/index',
    },
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{ loader: 'url-loader?limit=8192' }, { loader: 'img-loader' }]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{ loader: 'babel-loader?presets[]=stage-0,presets[]=react,presets[]=es2015,plugins[]=transform-class-properties' }]
            }
        ]
    },
    resolve: {
        alias: {
            'components': path.resolve(__dirname, './src/js/components'),
            'routes': path.resolve(__dirname, './src/js/routes'),
            'svg': path.resolve(__dirname, './src/js/svg'),
            'styles': path.resolve(__dirname, './src/styles'),
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
