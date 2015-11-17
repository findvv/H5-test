var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglyfly = require('gulp-uglyfly');
gulp.task('browserify', function() {
  browserify('./app/js/main.js')
    .transform("babelify", {
      presets: ["es2015", "react"]
    })
    .bundle()
    .pipe(source('bundle.min.js'))
    .pipe(gulp.dest('./public/js/'))
    // .pipe(uglyfly())
    // .pipe(gulp.dest('./public/js/'))
});
gulp.task('watch', function() {
  gulp.watch('./app/js/main.js',['browserify']);
});
gulp.task('default', ['watch']);
