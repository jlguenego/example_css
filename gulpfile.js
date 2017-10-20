const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

gulp.task('default', ['deploy']);

const cfg = {
	deploy: ['app/**/*'],
};

gulp.task('deploy', function () {
	return gulp.src(cfg.deploy)
		.pipe(ghPages({ cacheDir: '../.publish_example_css' }));
});
