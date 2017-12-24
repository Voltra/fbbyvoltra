////////////////////////////////////////////////////////////////////////////////////////////////////
//// IMPORTS
////////////////////////////////////////////////////////////////////////////////////////////////////
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


////////////////////////////////////////////////////////////////////////////////////////////////////
//// BASE DEFINITIONS
////////////////////////////////////////////////////////////////////////////////////////////////////
const dev = (process.env["NODE_ENV"] === "dev");
const config = {};
const thisPath = __dirname;


////////////////////////////////////////////////////////////////////////////////////////////////////
//// TARGET
////////////////////////////////////////////////////////////////////////////////////////////////////
config.target = "web";


////////////////////////////////////////////////////////////////////////////////////////////////////
//// MODULE RESOLUTION
////////////////////////////////////////////////////////////////////////////////////////////////////
config.resolve = {};
config.resolve.alias = {
	"@js": path.resolve(thisPath, "dev/js/"),
	"@components": path.resolve(thisPath, "dev/js/components/"),
	"@css": path.resolve(thisPath, "dev/css/"),
	"@img": path.resolve(thisPath, "dev/resources/img/"),
	"$es-vue": "vue/dist/vue.esm.js",
	"$vue": "vue/dist/vue.min.js"
};
config.resolve.extensions = [
	".js",
	".es6",
	".vue",
    ".css"
];


////////////////////////////////////////////////////////////////////////////////////////////////////
//// ENTRIES
////////////////////////////////////////////////////////////////////////////////////////////////////
config.entry = {};
config.entry["home"] = "@js/home.js";


////////////////////////////////////////////////////////////////////////////////////////////////////
//// OUTPUTS
////////////////////////////////////////////////////////////////////////////////////////////////////
config.output = {
	path: path.resolve(thisPath, "public_html/assets/js"),
	filename: dev ? "[name].bundle.js" : "[name].[chunkhash:8].bundle.js",
	publicPath: "/assets/js/"
};


////////////////////////////////////////////////////////////////////////////////////////////////////
//// DEV TOOLS
////////////////////////////////////////////////////////////////////////////////////////////////////
config.devtool = dev ? "cheap-module-eval-source-map" : false;


////////////////////////////////////////////////////////////////////////////////////////////////////
//// MODULES/LOADERS
////////////////////////////////////////////////////////////////////////////////////////////////////
config.module = {};
config.module.rules = [];
config.module.rules.push({
	test: /\.(js|es6)$/,
	exclude: /(node_modules|bower_components)/g,
	use: [
		"babel-loader"
	]
});
config.module.rules.push({
	test: /\.(png|jpe?g|gif|svg)$/,
	use: [
		{
			loader: "url-loader",
			options: {
				limit: 8192,
				name: "[name].[hash:8].[ext]"
			}
		},
		{
			loader: "img-loader",
			options: {
				enabled: !dev
			}
		}
	]
});
config.module.rules.push({
	test: /\.(woff2?|eot|ttf|otf)$/,
	loader: "file-loader"
});
const styleLoaders = ["style-loader", "css-loader"];
config.module.rules.push({
    test: /\.css$/,
    use: styleLoaders
});
config.module.rules.push({
	test: /\.vue$/,
	loader: "vue-loader",
    options: {
		loaders: {
			css: `vue-style-loader${styleLoaders.map(e=>`!${e}`).join("")}`
		}
	}
});


////////////////////////////////////////////////////////////////////////////////////////////////////
//// PLUGINS
////////////////////////////////////////////////////////////////////////////////////////////////////
config.plugins = [];
if(!dev){
	config.plugins.push(new UglifyJsPlugin({
		sourceMap: false
	}));
	config.plugins.push(new ManifestPlugin());
	config.plugins.push(new CleanWebpackPlugin(["assets/js"], {
		root: path.resolve(thisPath, "./public_html"),
		verbose: true,
		dry: false,
        exclude: ["globals", "globals/*", "globals/*.*"]
	}));
}



////////////////////////////////////////////////////////////////////////////////////////////////////
//// EXPORT
////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = config;
