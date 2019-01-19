//
//  jonathanballands.me
//  webpack.config.dev.js
//
//  © 2018 Jonathan Ballands
//

const path = require('path');

// -----------------------------------------------------------------------------

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname),
	entry: {
		index: './src/index.jsx',
	},
	optimization: {
		minimize: false,
	},
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
						loader: 'babel-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.md'],
		alias: {
			actions: path.resolve(__dirname, './src/actions'),
			components: path.resolve(__dirname, './src/components'),
			containers: path.resolve(__dirname, './src/containers'),
			experiments: path.resolve(__dirname, './experiments'),
			helpers: path.resolve(__dirname, './src/helpers'),
			reducers: path.resolve(__dirname, './src/reducers'),
			routes: path.resolve(__dirname, './src/routes'),
			sagas: path.resolve(__dirname, './src/sagas'),
			svg: path.resolve(__dirname, './src/svg'),
			styles: path.resolve(__dirname, './src/styles'),
			'~': path.resolve(__dirname, '.'),
		},
	},
	devServer: {
		contentBase: './public',
		historyApiFallback: true,
		watchContentBase: true,
		host: '0.0.0.0',
		port: 3001,
	},
};
