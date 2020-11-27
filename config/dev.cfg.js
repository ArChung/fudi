const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const baseConfig = require("./base.cfg");
const PATHS = {
	src: path.join(__dirname, "../src"),
	dist: path.join(__dirname, "../dist")
};
const pages = glob
	.sync("**/*.twig", {
		cwd: path.join(__dirname, "../src/views"),
		root: "/"
	})
	.map(
		page =>
			new HtmlWebpackPlugin({
				filename: page.replace("twig", "html"),
				template: path.join(__dirname, `../src/views/${page}`),
				inject: true
			})
	);

const lintStylesOptions = {
	context: path.resolve(__dirname, "../src/styles/"),
	syntax: "scss",
	fix: true
};

module.exports = merge(baseConfig, {
	entry: {
		twig: path.join(__dirname, "../src") + "/twig.js"
	},
	devServer: {
		stats: "errors-only",
		contentBase: path.resolve(__dirname, "../src/"),
		// watchContentBase: true,
		// writeToDisk: true,
		hot: true,
		port: 9527,
		quiet: true,
		overlay: {
			warnings: true,
			errors: true
		},
		watchOptions: {
			aggregateTimeout: 100
		}
	},
	mode: "development",
	devtool: "sourcemap",
	// externals: {
	// 	jquery: "jQuery",
	// 	custom: "./"
	// },
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
			// gee: "gene-event-handler/app/scripts/jquery.gene"
		}),
		new FriendlyErrorsWebpackPlugin(),
		// new FriendlyErrorsWebpackPlugin({
		// 	onErrors: (severity, errors) => {
		// 		if (severity !== "error") {
		// 			return;
		// 		}
		// 		const error = errors[0];
		// 		notifier.notify({
		// 			title: "Compile error",
		// 			message: severity + ": " + error.name,
		// 			subtitle: error.file || "",
		// 			icon: path.join(__dirname, "../notify-error.png"),
		// 			sound: false
		// 		});
		// 	}
		// }),
		...pages,
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			disable: false,
			allChunks: true
		}),

		new webpack.WatchIgnorePlugin([
			path.join(__dirname, "node_modules"),
			path.join(__dirname, "config"),
			path.join(__dirname, "dist")
		]),
		new webpack.HotModuleReplacementPlugin(),
		new StylelintPlugin(lintStylesOptions),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|ico)$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "file-loader",
						options: {
							context: path.resolve(__dirname, "../src/"),
							name: "[path][name].[hash:7].[ext]"
						}
					}
				]
			},
			{
				test: /\.(png)$/,
				include: /(node_modules|bower_components)/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[name].[hash:7].[ext]"
						}
					}
				]
			},
			// {
			// 	test: /\.(woff|woff2)$/,
			// 	use: [
			// 		{
			// 			loader: "file-loader",
			// 			options: {
			// 				context: path.resolve(__dirname, "../src/"),
			// 				name: "[path][name].[ext]"
			// 				// outputPath: "assets/fonts",
			// 				// publicPath: url => {
			// 				// 	return "../fonts/" + url;
			// 				// }
			// 			}
			// 		}
			// 	]
			// },
			{
				test: /\.(css|scss|sass)$/,
				use: [
					"css-hot-loader",
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: "../"
						}
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							minimize: false,
							sourceMap: true,
							colormin: false
							// hmr: process.env.NODE_ENV === 'development'
						}
					}, // translates CSS into CommonJS

					{
						loader: "postcss-loader",
						options: {
							sourceMap: true,
							ident: "postcss",
							plugins: [
								// tailwindcss('/tailwind.config.js'),
								require("tailwindcss"),
								require("autoprefixer")
							]
						}
					},
					{
						loader: "sass-loader",
						options: {
							includePaths: [
								path.resolve(__dirname, "../src/assets/styles/global")
							],
							data: `@import "breakpoints.scss";
										 $publicPath : '/';
										 `,
							sourceMap: true
						}
					}
				]
			}
		]
	}
});
