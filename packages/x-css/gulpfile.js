'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
// var customMedia = require("postcss-custom-media");

var salad = require('postcss-salad')(require('./salad.config.json'));

gulp.task('compile', function() {
  return gulp.src('./src1/*.css')
  // .pipe(customMedia())
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('copyfont', function() {
  return gulp.src('./src1/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'));
});


gulp.task('build', ['compile', 'copyfont']);
gulp.task('watch', function () {
  gulp.watch('./src1/*.css', ['compile', 'build'])
})
