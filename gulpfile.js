const sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass')(require('sass')),
  gulp = require('gulp');

function build() {
  return gulp.src('./_sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./style'));
}

exports.default = build;