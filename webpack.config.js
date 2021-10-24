const path = require('path');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const gsapPath = '/node_modules/gsap/src/uncompressed/';

module.exports = {
	devtool: 'source-map',
	entry: path.join(__dirname, 'src', 'index.tsx'),
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(tsx|ts)$/,
				exclude: '/node_modules/',
				include: path.resolve(__dirname, 'src'),
				use: ['babel-loader', 'ts-loader', 'tslint-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
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
	optimization: {
		minimize: true,
		minimizer: [
			// For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
			// `...`
			new CssMinimizerPlugin()
		]
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'docs'),
		publicPath: './',
		sourceMapFilename: 'main.js.map'
	},
	plugins: [
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
			Draggable: path.join(__dirname, gsapPath + 'utils/Draggable.js'),
			ScrollToPlugin: path.join(__dirname, gsapPath + 'plugins/ScrollToPlugin.js'),
			TweenLite: 'gsap'
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
		modules: ['node_modules', path.resolve(__dirname, 'src')]
	}
};
