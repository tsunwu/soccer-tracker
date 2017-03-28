'use strict';

const babelify = require('babelify');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const cleancss = require('gulp-clean-css');
const config = require('./gulp.config')();
const del = require('del');
const eslint = require('gulp-eslint');
const flatten = require('gulp-flatten');
const gulp = require('gulp');
const inject = require('gulp-inject');
const jade = require('gulp-jade');
const ngAnnotate = require('gulp-ng-annotate');
const nodemon = require('gulp-nodemon');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const sourceMaps = require('gulp-sourcemaps');
const wiredep = require('wiredep').stream;

gulp.task('eslint', () => {
	return gulp
		.src(config.js.srcFiles)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('browserify', () => {
	return browserify({entries: config.js.app, debug: true})
			.transform('babelify', { presets: ['es2015']})
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(ngAnnotate())
			.pipe(gulp.dest(config.js.dest));
});

gulp.task('style', () => {
	return gulp
		.src(config.styles.main)
		.pipe(sourceMaps.init())
		.pipe(sass({
			outputStyle: 'compact'
		}).on('error', sass.logError))
		.pipe(rename(config.styles.name))
		.pipe(cleancss())
		.pipe(sourceMaps.write('./'))
		.pipe(gulp.dest(config.styles.dest))
		.pipe(browserSync.reload({ stream: true }));
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
		.pipe(inject(gulp.src(config.styles.bundle)))
		.pipe(gulp.dest(config.jade.indexDest));
});

gulp.task('clean', () => {
	return del.sync(['./dist']);
});

gulp.task('watch', ['browserSync'], () => {
	gulp.watch([config.js.srcFiles], ['eslint', 'browserify']).on('change', browserSync.reload);
	gulp.watch([config.styles.bundle], ['style', 'inject']);
	gulp.watch([config.jade.srcFiles], ['jade', 'inject']).on('change', browserSync.reload);
});

gulp.task('browserSync', ['nodemon'], () => {
	browserSync.init(config.browserSync);
});

gulp.task('nodemon', () => {
	nodemon({
		script: 'server.js',
		ext: 'jade js sass',
		ignore: ['server.js']
	});
});

gulp.task('dev-server', ['clean', 'browserify', 'jade', 'inject']);

gulp.task('dev', ['dev-server'], () => {
  gulp.start('watch')
});

