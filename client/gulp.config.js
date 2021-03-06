// Define Default Paths
var path = {
    vendorFilePath: 'node_modules/',
    app: "app"
};
var config = {
    rootPath: "./app/",
    assetsPath: path.app + "/assets/",
    vendorCss: {
        dist: path.app + "/assets/css/",
        src: [

        ]
    },
    vendorJs: {
        dist: path.app + "/assets/js",
        src: [
            path.vendorFilePath + "angular/angular.min.js",
            path.vendorFilePath + "angular-sanitize/angular-sanitize.js",
            path.vendorFilePath + "@uirouter/angularjs/release/angular-ui-router.min.js",
            path.vendorFilePath + "jquery/dist/jquery.min.js"
        ]
    },
    styleSheets: {
        dist: path.app + "/assets/css",
        src: [path.app + '/assets/sass/*.scss']
    },
    scripts: {
        dist: path.app + "/assets/js",
        src: [
            path.app + '/*.js',
            path.app + "/directives/*.js",
            path.app + "/services/*.js",
            path.app + "/factory/*.js",
            path.app + "/components/**/*.js"
        ]
    },
    unitTest: {
        src: [path.app + "/unit-test/*.js"]
    },
    fonts: [],
};

module.exports = config;