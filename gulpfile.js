const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

// Instructions for how task will run.
gulp.task('concat', function(){
  // gulp.src(['./js/services/mainService.js', './js/adventurerCard.js', './js/'])       Bad way
  // Use a wildcard instead. Wildcard = *
  gulp.src(['./js/app.js', './js/**/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'));
});


// Compile scss into css files
gulp.task('sass', function() {
  gulp.src([
    // './styles/views/*{.scss,.css}',
    // './styles/**/*.scss',
    // './styles/*.scss',
    './styles/main.scss'
    ])
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch('./js/**/*.js', ['concat']);
    gulp.watch('./styles/*.scss', ['sass']);
})

gulp.task('default', ['concat', 'sass', 'watch']);


// Gulp watch
// takes two arguments: the file(s) to watch, and then the task to do if it notices a change.