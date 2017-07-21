var gulp = require('gulp');
var connect = require('gulp-connect');
var scss = require('gulp-sass');

gulp.task('connect', function () {
  connect.server({
    root: './app',
    port: 8080,
    livereload: true,
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload())
    .pipe(gulp.dest('./dist'));
});
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload())
    .pipe(gulp.dest('./dist/css'));
});
gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload())
    .pipe(gulp.dest('./dist/js'));
});
gulp.task('scss',function(){
  gulp.src('./app/scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./app/css'));
});
gulp.task('img',function(){
  gulp.src('./app/img/*.*')
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/js/*.js'], ['js']);
  gulp.watch(['./app/scss/*.scss'],['scss']);
  gulp.watch(['./app/css/*.css'], ['css']);
  gulp.watch(['./app/img/*.*'],['img']);
});

gulp.task('default', ['connect', 'watch']);
