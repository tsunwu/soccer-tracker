'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const flatten = require('gulp-flatten');
const wiredep = require('wiredep').stream;
const inject = require('gulp-inject');
const nodemon = require('gulp-nodemon');
const browserify = require('browserify');
const babelify = require('babelify');
const ngAnnotate = require('gulp-ng-annotate');
const source = require('vinyl-source-stream');

const config = require('./gulp.config')();

gulp.task('eslint', () => {
	return gulp
		.src(config.js.srcFiles)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('browserify', ['eslint'], () => {
	return browserify({entries: config.js.app, debug: true})
			.transform('babelify', { presets: ['es2015']})
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(ngAnnotate())
			.pipe(gulp.dest(config.js.dest));
});

gulp.task('style', () => {
	return gulp
		.src(config.styles.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(config.styles.dest));
});

gulp.task('jade', () => {
	return gulp
		.src(config.jade.tpl)
		.pipe(jade())
		.pipe(flatten())
		.pipe(gulp.dest(config.jade.dest));
});

gulp.task('wiredep', () => {
	const options = config.getWiredepDefaultOptions();
	
	return gulp
		.src(config.jade.index)
		.pipe(wiredep(options))
		.pipe(inject(gulp.src(config.js.bundle)))
		.pipe(gulp.dest(config.jade.indexDest));
});

gulp.task('inject', ['wiredep', 'style'], () => {
	return gulp
		.src(config.jade.index)
		.pipe(inject(gulp.src(config.styles.cssFiles)))
		.pipe(gulp.dest(config.jade.indexDest));
});

gulp.task('watch', () => {
	gulp.watch([config.js.srcFiles], ['eslint', 'browserify']);
	gulp.watch([config.styles.cssFiles], ['style', 'inject']);
	gulp.watch([config.jade.srcFiles], ['jade', 'inject']);
});

gulp.task('nodemon', () => {
	let stream = nodemon({
		script: 'server.js',
		ext: 'jade js sass',
		ignore: ['server.js']
	});
	
	stream
	.on('start', ['watch'])
	.on('change', ['watch']);
});

