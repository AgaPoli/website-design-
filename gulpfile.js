var gulp = require('gulp');
var gulpSass = require('gulp-sass');

gulp.task('buildcss', function(){
    return gulp.src('./dev-assets/style.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('./prod-assets'));
});

gulp.task('watch', function(){
    // @ts-ignore
    gulp.watch('./dev-assets/**/*.scss', ['buildcss']);
});