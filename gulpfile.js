var gulp   = require('gulp');
var tsc    = require('gulp-tsc');
var shell  = require('gulp-shell');
var runseq = require('run-sequence');
var webserver = require('gulp-webserver');
var del = require('del');

var sourcePath = 'app/src/';
var destinationPath = 'app/build/';

gulp.task('default', ['build']);


// Watching
gulp.task('watch', function () {
	gulp.watch(sourcePath+'**/*', ['build']);
});


// Cleaning
gulp.task('clean:build', function(cb){
	del([
		destinationPath+'**/*'
	], cb);
});


// Compiling
gulp.task('compile:typescript', function (cb) {
	gulp.src(sourcePath+'**/*.ts')
	.pipe(tsc({
		module: 'commonjs',
		emitError: true,
		out: 'oaktale.js'
	}))
	.pipe(gulp.dest(destinationPath));
	cb();
});
gulp.task('compile:html', function(){
	gulp.src(sourcePath+'**/*.html')
	.pipe(gulp.dest(destinationPath));
});
gulp.task('build', function(cb){
	runseq('clean:build', 'compile:typescript', 'compile:html', cb);
});

// Serving
gulp.task('serve', function(){
	gulp.src(destinationPath)
	.pipe(webserver({
		livereload: false,
		open: false,
	}));
});
gulp.task('servewatch', ['build', 'serve', 'watch']);