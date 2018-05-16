let gulp = require('gulp'),
    watch = require('gulp-watch'),
    jasmine = require('gulp-jasmine')
    plumber = require('gulp-plumber');

gulp.task('run-tests', function () {
	return gulp.src('spec/**/*.js')
						 .pipe(plumber())
             .pipe(jasmine());
});

gulp.task('test', function () {
	return watch(['spec/**/*.js','src/**/*.js'], { ignoreInitial: false }, function() {
		gulp.start('run-tests');
	});
});