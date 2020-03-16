const gulp = require("gulp");
const less = require("gulp-less");

gulp.task("default",function(){
    return gulp
    .src('src/*.less')
    .pipe(less({
        outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('dest'));
});

gulp.task('watch',function(){
    return gulp.watch('./*.less',['less']);
});