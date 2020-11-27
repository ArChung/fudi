const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const PATHS = {
	src: path.join(__dirname, "../src"),
	dist: path.join(__dirname, "../dist")
};
module.exports = {
	devtool: "source-map",
	entry: {
		// twig: PATHS.src + '/twig.js',
		bundle: PATHS.src + "/main.js"
		// icons: PATHS.src + "/icons.js"
	},
	output: {
		path: PATHS.src,
		filename: "assets/scripts/[name].[hash:7].js"
	},
	resolve: {
		alias: {
			"@src": path.resolve(__dirname, "../src"),
			"@views": path.resolve(__dirname, "../src/views"),
			"@icons": path.resolve(__dirname, "../src/assets/images/icons"),
			"@images": path.resolve(__dirname, "../src/assets/images"),
			"@layouts": path.resolve(__dirname, "../src/layouts"),
			"@cmpt": path.resolve(__dirname, "../src/cmpt"),
			"@core": path.resolve(__dirname, "../src/_core")
		}
	},
	module: {
		rules: [
			{
				test: /\.twig$/,
				use: [
					"raw-loader",
					{
						loader: "twig-html-loader",
						options: {
							// trace: true,
							// debug: true,
							namespaces: {
								core: path.resolve(__dirname, "../src/_core"),
								mod: path.resolve(__dirname, "../src/mod"),
								cmpt: path.resolve(__dirname, "../src/cmpt"),
								views: path.resolve(__dirname, "../src/views"),
								layouts: path.resolve(__dirname, "../src/layouts")
							},
							// base: ['./src/views/', './src/components/', './src/layouts/'],
							filters: {
								t(str) {
									return str;
								},
								assets(str) {
									return "assets/" + str.replace(/images/g, "images/");
									// return str.replace(/images/g, "images/");
								},
								r(str) {
									return "" + str + ".html";
								}
							},

							data: {
								cfg: ""
							}
						}
					}
				]
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[hash].[ext]",
							outputPath: "media/"
						}
					}
				]
			},
			// {
			// 	test: /\.font\.js/,
			// 	use: [
			// 		MiniCssExtractPlugin.loader,
			// 		{
			// 			loader: "css-loader",
			// 			options: { url: false, outputPath: PATHS.src }
			// 		},
			// 		{
			// 			loader: "webfonts-loader",
			// 			options: {
			// 				publicPath: `/`,
			// 				outputPath: PATHS.src
			// 			}
			// 		}
			// 	]
			// },
			{
				test: /\.svg$/,
				// exclude: path.resolve(__dirname, '../src/images/icons/'),
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "images/"
						}
					},
					"svg-transform-loader"
				]
			}
		]
	}
};
