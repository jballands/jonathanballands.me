//
//  jonathanballands.me
//  webpack.config.prod.js
//
//  © 2018 Jonathan Ballands
//

const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

// -----------------------------------------------------------------------------

module.exports = {
	mode: 'production',
	entry: {
		index: './src/js/index',
	},
	optimization: {
		minimize: true,
	},
	plugins: [
		new CompressionPlugin({
			filename: '[path]',
		}),
	],
	output: {
		path: path.resolve(__dirname, './public'),
		publicPath: '/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
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
							'babel-loader?presets[]=stage-0,presets[]=react,plugins[]=transform-class-properties',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
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
};
