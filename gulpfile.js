const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

gulp.task('start', watch);
gulp.task('css', buildStyles);
gulp.task('js', buildScripts);

function buildStyles() {
  return gulp
  .src('./src/sass/**/*.scss')
  .pipe(sass({outputStyled: 'nested'}))
  .pipe(autoprefixer())
  .pipe(rename('style.css'))
  .pipe(gulp.dest('./src/assets/css/'));
}

function buildScripts() {
  return gulp
  .src('./src/js/*.js')
  .pipe(concat('script.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./src/assets/js'))
}

function watch() {
  gulp.watch('./src/sass/**/*.scss', buildStyles);
  gulp.watch('./src/js/**/*.js', buildScripts);
}