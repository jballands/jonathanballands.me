//
//  jonathanballands.me
//  webpack.config.dev.js
//
//  © 2017 Jonathan Ballands
//

const path = require('path');
const webpack = require('webpack');

// -----------------------------------------------------------------------------

module.exports = {
	context: path.resolve(__dirname),
	entry: {
		index: './src/js/index.jsx',
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
			},
		}),
	],
	output: {
		path: path.resolve(__dirname, './public/assets'),
		publicPath: '/assets/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
			{
				test: /\.jsx?$/,
				include: /src/,
				use: [{ loader: 'source-map-loader' }],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{ loader: 'url-loader?limit=8192' },
					{ loader: 'img-loader' },
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader:
							'babel-loader?presets[]=stage-0,presets[]=react,presets[]=es2015,plugins[]=transform-class-properties',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			actions: path.resolve(__dirname, './src/js/actions'),
			components: path.resolve(__dirname, './src/js/components'),
			containers: path.resolve(__dirname, './src/js/containers'),
			experiments: path.resolve(__dirname, './experiments'),
			helpers: path.resolve(__dirname, './src/js/helpers'),
			reducers: path.resolve(__dirname, './src/js/reducers'),
			routes: path.resolve(__dirname, './src/js/routes'),
			sagas: path.resolve(__dirname, './src/js/sagas'),
			svg: path.resolve(__dirname, './src/js/svg'),
			styles: path.resolve(__dirname, './src/styles'),
			'~': path.resolve(__dirname, '.'),
		},
	},
	devServer: {
		publicPath: '/assets/',
		contentBase: './public',
		historyApiFallback: true,
		port: 3001,
	},
};
