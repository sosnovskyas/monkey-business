var prod = './build/prod';
var dev = './build/dev';
var src = './src';
var cssFileList = '/**/*.{sass,scss}';
var jsFileList = '/**/*.{js,coffee}';
var markupFileList = '/**/*.jade';
var imgFileList = '/img/**/*';

module.exports = {

    // DEVELOPMENT
    devCssCustom: {
        src: src + cssFileList,
        dest: dev,
        concatFile: 'styles.css',
        settings: {
            indentedSyntax: true, // Enable .sass syntax!
            imagePath: 'images' // Used by the image-url helper
        }
    },
    devCssVendor: {
        src: [
                // bootstrap
                'bower/bootstrap/dist/css/bootstrap.css',
                'bower/bootstrap/dist/css/bootstrap-theme.css',
                // for ng-cloak working
                'bower/angular/angular-csp.css'
            ],
        dest: dev,
        concatFile: 'lib.css',
        settings: {
            indentedSyntax: true, // Enable .sass syntax!
            imagePath: 'images' // Used by the image-url helper
        }
    },
    devJsCustom: {
        src: src + jsFileList,
        dest: dev
    },
    devJsVendor: {
        src: [
                'bower/jquery/dist/jquery.js',
                'bower/angular/angular.js',
                'bower/firebase/firebase-debug.js',
                'bower/angularfire/dist/angularfire.js',
                'bower/angular-ui-router/release/angular-ui-router.js',
                'bower/bootstrap/dist/js/bootstrap.js'
            ],
        concatFile: 'lib.js',
        dest: dev
    },
    devImg: {
        src: src + imgFileList,
        dest: dev + '/i'
    },
    devMarkup: {
        src: src + markupFileList,
        dest: dev
    },
    devWatch: {
        js: src + jsFileList,
        css: src + cssFileList,
        markup: src + markupFileList
    },
    devClean: {
        dest: dev
    },
    devServer: {
        dest: dev
    },

    // PRODUCTION
    prod:{},
    prodCssVendor: {
        src: [
            // bootstrap
            'bower/bootstrap/dist/css/bootstrap.css',
            'bower/bootstrap/dist/css/bootstrap-theme.css',
            // for ng-cloak working
            'bower/angular/angular-csp.css'
        ],
        dest: prod,
        concatFile: 'lib.css',
        settings: {
            indentedSyntax: true, // Enable .sass syntax!
            imagePath: 'i' // Used by the image-url helper
        }
    },
    prodCssCustom: {
        src: src + cssFileList,
        dest: prod,
        concatFile: 'styles.css',
        settings: {
            indentedSyntax: true, // Enable .sass syntax!
            imagePath: 'i' // Used by the image-url helper
        }
    },
    prodJsVendor: {
        src: [
            'bower/jquery/dist/jquery.min.js',
            'bower/angular/angular.min.js',
            'bower/firebase/firebase.js',
            'bower/angularfire/dist/angularfire.min.js',
            'bower/angular-ui-router/release/angular-ui-router.min.js',
            'bower/bootstrap/dist/js/bootstrap.js'
        ],
        concatFile: 'lib.js',
        dest: prod
    },
    prodJsCustom: {
        src: src + jsFileList,
        concatFile: 'app.js',
        dest: prod
    },
    prodImg: {
        src: src + imgFileList,
        dest: prod + '/i'
    },
    prodMarkup: {
        src: src + markupFileList,
        dest: prod
    },
    prodClean: {
        dest: prod
    },
    prodServer: {
        dest: prod
    }
};