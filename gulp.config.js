module.exports = () => {
	'use strict';
  const dist = './dist';
  const src = './src';
  const components = src + '/components';
	const styles = src + '/styles';
	
	const config = {
		bower: {
			json: require('./bower.json'),
			directory: './bower_components'
		},
    browserSync: {
      files: [
        './dist/*.js',
        './dist/**/*.html'
      ],
      open: false,
      notify: false,
      proxy: 'http://localhost:8080',
      port: 8000
		},
    jade: {
      srcFiles: [
        src + '/index.jade',
        components + '/**/*.jade'
      ],
      index: src + '/index.jade',
      indexDest: src,
      tpl: components + '/**/*.jade',
      dest: dist + '/tpl'
    },
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
			main: styles + '/main.sass',
			dest: dist,
			bundle: dist + '/bundle.css',
			name: 'bundle.css'
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