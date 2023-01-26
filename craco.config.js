const CracoLessPlugin = require('craco-less');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

const tsConfigPath = path.resolve(__dirname, "./tsconfig.json") 

module.exports = {
	reactScriptsVersion: "react-scripts",
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {},
						javascriptEnabled: true,
					},
				},
			},
		},
		{ plugin: new OpenBrowserPlugin({ url: "http://localhost:3000" }) },
	],
	webpack: {
		configure: (webpackConfig) => {
			webpackConfig.optimization.minimizer = [
				new TerserPlugin({
					cache: true,
					parallel: true,
					sourceMap: true, // Must be set to true if using source-maps in production
					terserOptions: {
						compress: {
							drop_console: true,
						},
					},
				}),
			];
			return webpackConfig;
		},
		alias: {
			"@": path.resolve(__dirname, "src")
		},
		plugins: [
			new TsconfigPathsPlugin({ configFile: tsConfigPath })
		],
	}
};