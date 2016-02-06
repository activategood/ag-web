var gulp = require('gulp')
  , gpSass = require('gulp-ruby-sass')
  , gpRename = require('gulp-rename')
  , gpUglify = require('gulp-uglify')
  , gpConcat = require('gulp-concat')
  , gpClean = require('gulp-clean')
  , browserSync = require('browser-sync')
  , reload = browserSync.reload
;

var vendorJs = [
  'bower_components/angular/angular.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-jwt/dist/angular-jwt.js',
  'bower_components/angular-toastr/dist/angular-toastr.js'
];

gulp.task('default', function() {
  
});

// Compile SASS
gulp.task('sass', function() {
  return sass('app/src/styles/styles.scss')
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({ stream:true }));
});

gulp.task('clean', function() {
  gulp.src('app/tmp/')
    .pipe(gpClean({force: true}));
});

// Replace script tags with single minified script
gulp.task('build:vendors', function() {
  gulp.src(vendorJs)
    .pipe(gpConcat('concat.js'))
    .pipe(gulp.dest('app/tmp'))
    .pipe(gpRename('ag.min.js'))
    .pipe(gpUglify())
    .pipe(gulp.dest('app/dist'));
});

gulp.task('build', ['build:vendors', 'clean']);

// watch files for changes and reload
gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });

  gulp.watch(['*.html', 'styles/**/*.scss', 'scripts/**/*.js'], {cwd: 'src'}, reload);
});