var gulp = require('gulp'),
    gutil = require('gulp-util'),
    os = require('os'),
    chalk = require('chalk')
    exec = require('child_process').exec;

var watchList = ['src/**/*.js', 'src/**/*.html', 'src/**/*.css', '!src/lib/**/*.*'];

gulp.task('default', ['usage']);

gulp.task('usage', function() {
    "use strict";

    var usageLines = [
        '',
        '',
        chalk.green('usage'),
        '\tdisplay this help page.',
        '',
        chalk.green('start'),
        '\tstarts the homescreen demo.',
        '',
        chalk.green('test'),
        '\truns the homescreen directive unit tests.',
        ''
    ];
    gutil.log(usageLines.join(os.EOL));
});

gulp.task('start', function(cb) {
    exec('live-server src/', function (err, stdout, stderr) {
        gutil.log(stdout);
        gutil.log(stderr);
        cb(err);
    });
});

gulp.task('test', function() {
    gutil.log(chalk.red('test commmand not implemented!'));
});