const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const postcss = require('gulp-postcss');
const uncss = require('postcss-uncss');

gulp.task('default', ['deploy']);

const cfg = {
	deploy: ['app/**/*'],
};

gulp.task('deploy', function () {
	return gulp.src(cfg.deploy)
		.pipe(ghPages({
			cacheDir: '../.publish_example_css'
		}));
});

gulp.task('uncss', function () {
	const plugins = [
		uncss({
			html: ['./app/04-advanced/07-uncss/**/*.html']
		}),
	];
	return gulp.src('./app/04-advanced/07-uncss/**/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('./dist'));
});