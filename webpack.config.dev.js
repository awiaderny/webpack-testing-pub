const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const gsapPath = '/node_modules/gsap/src/';

module.exports = {
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
		host: 'localhost',
		inline: true,
		port: 3000
	},
	devtool: 'source-map',
	entry: path.join(__dirname, 'src', 'index.tsx'),
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(tsx|ts)$/,
				use: ['babel-loader', 'ts-loader', 'tslint-loader']
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [require('autoprefixer')()],
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000,
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]'
					}
				}
			},
			{
				test: /\.(glb|gltf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets/models',
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.mp3$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets/sounds'
						}
					}
				]
			},
			{
				test: /\.(bin)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets/models',
							sourceMap: true
						}
					}
				]
			}
		]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		sourceMapFilename: '[name].js.map'
	},
	plugins: [
		new CleanWebpackPlugin({
			verbose: true
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html')
		}),
		new webpack.ProvidePlugin({
			TweenMax: 'gsap'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'src/assets'
				}
			]
		})
	],
	resolve: {
		alias: {
			CSSPlugin: 'gsap',
			Draggable: path.join(__dirname, gsapPath + 'Draggable.js'),
			ScrollToPlugin: path.join(__dirname, gsapPath + 'ScrollToPlugin.js'),
			TweenLite: 'gsap'
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
		modules: ['node_modules', path.resolve(__dirname, 'src')]
	},
	watch: true
};
