module.exports = () => {
	'use strict';
  const dist = './dist';
  const src = './src';
  const components = src + '/components';
	const sass = src + '/sass';
	const css = dist + '/css';
	
	const config = {
			js: {
				app: components + '/app.js',
				srcFiles: [
						components + '/*.js',
						components + '/**/*.js'
				],
				dest: dist,
				bundle: dist + '/bundle.js'
			},
			styles: {
				sass: sass + '/*.sass',
				dest: css,
				cssFiles: css + '/*.css'
			},
			jade: {
				index: src + '/index.jade',
				indexDest: src,
				tpl: components + '/**/*.jade',
				dest: dist + '/tpl'
			},
			alljs: [
				components + '/*.js',
				components + '/**/*.js'
			],
			bower: {
	            json: require('./bower.json'),
	            directory: './bower_components'
	        }
	};
	
	config.getWiredepDefaultOptions = () => {
        return {
            bowerJson: config.bower.json,
            directory: config.bower.directory
        };
	};
    
	return config;
};