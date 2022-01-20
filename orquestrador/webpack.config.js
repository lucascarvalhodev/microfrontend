const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
	require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
	entry: "./src/index",
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		historyApiFallback: true,
		port: 3000,
		host: "0.0.0.0",
	},
	output: {
		publicPath: "auto",
		chunkFilename: "[id].[contenthash].js",
		filename: "[id].[contenthash].js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: [
			{
				test: /bootstrap\.tsx$/,
				loader: "bundle-loader",
				options: {
					lazy: true,
				},
			},
			{
				test: /\.tsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: ["@babel/preset-react", "@babel/preset-typescript"],
				},
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: require("./package.json").name,
			filename: "remoteEntry.js",
			remotes: {
				app1: "app1@http://localhost:3001/remoteEntry.js",
				app2: "app2@http://localhost:3002/remoteEntry.js",
				providers: "providers@http://localhost:3003/remoteEntry.js",
			},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react,
				},
				"react-dom": {
					singleton: true,
					requiredVersion: deps["react-dom"],
				},
			},
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
			publicPath: "/",
		}),
	],
};
