var gutil = require('gulp-util'),
    less = require('gulp-less'),
    path = require('path'),
    jshint = require('gulp-jshint'),
    react = require('gulp-react'),
    webpack = require('webpack'),
    shell = require('gulp-shell');

function loadTemplate(template) {
    return this.fs.readFileSync(template).toString();
}

module.exports = {
    createDefaultTasks: function(gulp, config) {
        var rootDir = config.rootDir;
        var prodPort = process.env.PORT || 8080;

        gulp.task("default", ['less', 'jsx']);

        gulp.task("less", doLess);

        gulp.task('jsx', function () { doJsx(); });

        gulp.task("webpack", doWebpack);

        function doLess() {
            return gulp.src(path.join(rootDir, 'styles/index.less'))
                .pipe(less({paths: [ path.join(rootDir, 'styles') ],
                    sourceMap:true,
                    sourceMapBasepath:rootDir,
                    sourceMapRootpath:'/'}))
                .on('error', gutil.log)
                .pipe(gulp.dest(path.join(rootDir, '/public/css')));
        }

        function doWebpack(callback) {
            return webpack(config.webpackConfig, function(err, stats) {
                if(err) throw new gutil.PluginError("webpack", err);
                gutil.log("[webpack]", stats.toString({}));
                callback();
            });
        }

        function doJsx() {
            //shell.task(['touch ' + path.join(rootDir, '/public/js/') + 'testMain.js']);
            return gulp.src(['src/**/*.jsx', 'src/**/*.js'])
                //.pipe(debug({verbose: true}))  // can enable if you run into issues
                .pipe(react({harmony:true}))
                .on('error', gutil.log)
                .pipe(gulp.dest(path.join(rootDir, '/public/js')));
        }

    }
};