//
//  jonathanballands.me
//  webpack.config.dev.js
//
//  © 2018 Jonathan Ballands
//

const webpack = require('webpack');
const path = require('path');

// -----------------------------------------------------------------------------

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname),
	entry: ['webpack/hot/dev-server', './src/index.jsx'],
	optimization: {
		minimize: false,
	},
	output: {
		path: path.resolve(__dirname, './public'),
		publicPath: '/',
		filename: 'bundle.js',
		chunkFilename: '[chunkhash].bundle.js',
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
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.md$/,
				use: [
					{
						loader: 'raw-loader',
					},
				],
			},
		],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	resolve: {
		extensions: ['.js', '.jsx', '.md'],
		alias: {
			actions: path.resolve(__dirname, './src/actions'),
			components: path.resolve(__dirname, './src/components'),
			containers: path.resolve(__dirname, './src/containers'),
			experiments: path.resolve(__dirname, './experiments'),
			helpers: path.resolve(__dirname, './src/helpers'),
			kinesis: path.resolve(__dirname, './src/kinesis'),
			posts: path.resolve(__dirname, './posts'),
			reducers: path.resolve(__dirname, './src/reducers'),
			routes: path.resolve(__dirname, './src/routes'),
			sagas: path.resolve(__dirname, './src/sagas'),
			src: path.resolve(__dirname, './src'),
			svg: path.resolve(__dirname, './src/svg'),
			styles: path.resolve(__dirname, './src/styles'),
			'~': path.resolve(__dirname, '.'),
		},
	},
	devServer: {
		contentBase: [
			path.resolve(__dirname, './public'),
			path.resolve(__dirname, './public/markdown'),
			path.resolve(__dirname, './public/assets'),
		],
		historyApiFallback: true,
		watchContentBase: true,
		host: '0.0.0.0',
		port: 3001,
		hot: true,
	},
	devtool: 'source-map',
};
