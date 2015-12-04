var gulp = require('gulp'),
    gutil = require('gulp-util'),
    os = require('os'),
    chalk = require('chalk'),
    exec = require('child_process').exec,
    del = require('del');

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
        chalk.green('clear'),
        '\tcleans the node_modules and the src/lib folder.',
        '',
        chalk.green('test'),
        '\truns the homescreen directive unit tests.',
        ''
    ];
    gutil.log(usageLines.join(os.EOL));
});

gulp.task('clean', function() {
    del(['node_modules', 'src/lib']);
});

gulp.task('test', function() {
    gutil.log(chalk.red('test commmand not implemented!'));
});