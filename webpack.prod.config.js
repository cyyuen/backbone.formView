var path = require('path');

var buildPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: "./index.js",
    output: {
        path: buildPath,
        filename: "backbone.formView.min.js",
	libraryTarget: "umd",
	library: "Backbone.FormView"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery",
	"backbone": "Backbone"
    }
};
