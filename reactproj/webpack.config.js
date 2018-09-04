var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist"); //directory from where the app will be served
var SRC_DIR = path.resolve(__dirname, "src");
console.log(DIST_DIR);
var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "tutorials/PHPpractice/reactproj/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
	node: {
   fs: "empty",
   child_process:"empty",
   module:"empty"
   
}
};

module.exports = config;