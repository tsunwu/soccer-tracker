module.exports = function() {
	'use strict';
	const components = './public/components';
	const sass = './public/sass';
	const css = './public/css';
	const views = './public/views';
	
	const config = {
			allFiles: [
				components + '/*.js',
				components + '/**/*.js',
				sass + '/*.sass',
				components + '/**/*.jade',
				views + '/*.jade'
			],
			alljs: [
				components + '/*.js',
				components + '/**/*.js'
			],
			allsass: sass + '/*.sass',
			cssOutput: css,
			allcss: css + '/*.css',
			alltpl: components + '/**/*.jade',
			index: views + '/index.jade',
			tplOutput: views + '/tpl',
			view: views,
			bower: {
	            json: require('./bower.json'),
	            directory: './bower_components'
	        }
	};
	
	config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory
        };
        return options;
    };
    
	return config;
};