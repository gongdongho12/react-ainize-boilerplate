const {ESLINT_MODES } = require("@craco/craco");
const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require("craco-antd");
// const CracoAlias = require("craco-alias");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

const tsConfigPath = path.resolve(__dirname, "./tsconfig.json") 

module.exports = {
	reactScriptsVersion: "react-scripts",
	plugins: [
		{
			plugin: CracoAntDesignPlugin,
			options: {
				customizeThemeLessPath: path.join(
					__dirname,
					"src/theme/customize.theme.less"
				),
			},
		},
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
	},
	eslint: {
		mode: ESLINT_MODES.file,
	},
};