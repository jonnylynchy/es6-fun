var gulp = require("gulp");
var babel = require("gulp-babel");
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

var server = {
	host: 'localhost',
	port: '3000'
}

var paths = {
	  scripts: ['./src/js/**/*.es6.js', './src/js/**/*.js'],
	  images: './src/images/**/*'
};

gulp.task("scripts", function () {
	return gulp.src(paths.scripts)
		.pipe(concat('app.js'))
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist/js/'))
});

gulp.task('webserver', function() {
	gulp.src('.')
		.pipe(webserver({
			livereload: true,
			directoryListing: true,
			open: true,
			host: server.host,
			port: server.port,
			directoryListing: false
		}));
});

gulp.task('watch', function(){
	gulp.watch('./src/js/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'webserver', 'watch']);

