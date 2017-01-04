const gulp = require('gulp');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const flatten = require('gulp-flatten');
const wiredep = require('wiredep').stream;
const inject = require('gulp-inject');
const nodemon = require('gulp-nodemon');

const config = require('./gulp.config')();

gulp.task('eslint', function() {
	return gulp
		.src(config.alljs)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('style', function() {
	return gulp
		.src(config.allsass)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(config.cssOutput));
});

gulp.task('jade', function() {
	return gulp
		.src(config.alltpl)
		.pipe(jade())
		.pipe(flatten())
		.pipe(gulp.dest(config.tplOutput));
});

gulp.task('wiredep', function() {
	const options = config.getWiredepDefaultOptions();
	
	return gulp
		.src(config.index)
		.pipe(wiredep(options))
		.pipe(inject(gulp.src(config.alljs)))
		.pipe(gulp.dest(config.view));
});

gulp.task('inject', ['wiredep', 'style'], function() {
	return gulp
		.src(config.index)
		.pipe(inject(gulp.src(config.allcss)))
		.pipe(gulp.dest(config.view));
});

gulp.task('watch', function() {
	gulp.watch([config.allFiles], ['eslint', 'jade', 'style']);
});

gulp.task('nodemon', function() {
	var stream = nodemon({
		script: 'server.js',
		ext: 'jade js sass',
		ignore: ['server.js']
	});
	
	stream
	.on('start', ['watch'])
	.on('change', ['watch']);
});

