/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    //minifyCss = require('gulp-minify-css'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin');


// minifyCSS is deprecated; testing cssnano
// options passed directly to the CleanCSS constructor so all the clean-css options // are available
/*gulp.task('minify-css', function() {
  return gulp.src('dist/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});
*/
// default function
gulp.task('default', function() {
  // place code for your default task here
});

// cssnano - css minifier
gulp.task('cssnano', function() {
    return gulp.src('./dist/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'));
});

// uglify - js minifier
gulp.task('compress', function() {
  return gulp.src('./dist/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// htmlmin -  html minify
gulp.task('minify', function() {
  return gulp.src('./dist/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))
});

// couldn't figure out how to grab sources from separate files in a single  gulp.src() so leaving as 2 different gulp.task
gulp.task('minify', function() {
  return gulp.src('./dist/views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/views'))
});


// imagemin and pngquant
// image optimizer
/*
gulp.task('image', () => {
	return gulp.src('./src/img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./dist/img'));
});    */

gulp.task('imagemin', function() {
    return gulp.src('./dist/img/*')
            .pipe(imagemin({
                progressive: true
            }))
            .pipe(gulp.dest('./dist/img'));
});


