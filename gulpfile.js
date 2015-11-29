var gulp = require('gulp'),
    gutil = require('gulp-util'),
    os = require('os'),
    chalk = require('chalk')
    spawn = require('child_process').spawn;

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
    gutil.log(chalk.red('start commmand not implemented!'));
});

gulp.task('test', function() {
    gutil.log(chalk.red('test commmand not implemented!'));
});