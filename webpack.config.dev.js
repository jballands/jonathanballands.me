//
//  jonathanballands.me
//  webpack.config.dev.js
//
//  © 2017 Jonathan Ballands
//

const path = require('path');

// -----------------------------------------------------------------------------

module.exports = {
    entry: {
        'index.bundle': './src/js/index'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
            },
            {
                test: /\.jsx?$/,
                include: /src/,
                use: [{ loader: 'source-map-loader' }]
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
    devServer: {
        publicPath: '/public/'
    }
};
