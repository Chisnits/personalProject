const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

// Instructions for how task will run.
gulp.task('concat', function(){
  // gulp.src(['./js/services/mainService.js', './js/adventurerCard.js', './js/'])       Bad way
  // Use a wildcard instead. Wildcard = *
  gulp.src(['./public/js/app.js', './public/js/**/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./public/dist'));
});


// Compile scss into css files
gulp.task('sass', function() {
  gulp.src([
    // './styles/views/*{.scss,.css}',
    // './styles/**/*.scss',
    // './styles/*.scss',
    './public/styles/main.scss'
    ])
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', function() {
    gulp.watch('./public/js/**/*.js', ['concat']);
    gulp.watch('./public/styles/*.scss', ['sass']);
})

gulp.task('default', ['concat', 'sass', 'watch']);


// Gulp watch
// takes two arguments: the file(s) to watch, and then the task to do if it notices a change.