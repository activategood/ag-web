'use strict';

const gulp = require('gulp')
  , gulpSass = require('gulp-sass')
  , gulpRename = require('gulp-rename')
  , gulpUglify = require('gulp-uglify')
  , gulpConcat = require('gulp-concat')
  , gulpReplace = require('gulp-html-replace')
  , gulpMinifyHtml = require('gulp-htmlmin')
  , gulpNgAnnotate = require('gulp-ng-annotate')
  , gulpClosure = require('gulp-jsclosure')
  , templateCache = require('gulp-angular-templatecache')
  , bs = require('browser-sync').create()
  , reload = bs.reload
  , p = require('path')
  , historyApiFallback = require('connect-history-api-fallback')
;

const paths = {
  scripts: [
    'src/vendor/ngInfiniteScroll/build/ng-infinite-scroll.js',
    'src/vendor/angular/angular.js',
    'src/vendor/angular-ui-router/release/angular-ui-router.js',
    'src/vendor/angular/angular.js',
    'src/vendor/angular-jwt/dist/angular-jwt.js',
    'src/vendor/angular-toastr/dist/angular-toastr.js',
    'src/vendor/jquery/dist/jquery.min.js',
    'src/vendor/bootstrap/dist/js/bootstrap.min.js',
    'src/vendor/underscore/underscore.js'
  ]
};

gulp.task('default', ['serve'])
gulp.task('build', ['sass','templates','static'])
gulp.task('static', ['copy:index','copy:app','copy:js','copy:vendor','copy:images','copy:data'])

// Compile SASS
gulp.task('sass', function() {
  return gulp.src('src/styles/styles.scss')
    .pipe(gulpSass())
    .pipe(gulpConcat('styles.css'))
    .pipe(gulp.dest('build/styles'))
})

// Register templates in the template cache
gulp.task('templates', function() {  
  return gulp.src('src/app/**/*.html')
    //.pipe(gulpMinifyHtml({collapseWhitespace: true}))
    .pipe(templateCache({
      module: 'templates',
      standalone: true,
      transformUrl: function(url) {
        return url.replace(p.extname(url), '')
      }
    }))
    .pipe(gulpConcat('templates.js'))
    .pipe(gulp.dest('build/app'))
})

gulp.task('copy:index', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
})

gulp.task('copy:images', function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('build/images'))
})

gulp.task('copy:app', function() {
  return gulp.src([
      'src/app/app.js',
      'src/app/**/*.js'
    ])
    .pipe(gulp.dest('build/app'))
})

gulp.task('copy:js', function() {
  return gulp.src([
      'src/scripts/**/*.js'
    ])
    .pipe(gulp.dest('build/scripts'))
})

gulp.task('copy:data', function() {
  return gulp.src([
      'src/app/data/*.json'
    ])
    .pipe(gulp.dest('build/data'))
})

gulp.task('copy:vendor', function() {
  return gulp.src('src/vendor/**/*')
    .pipe(gulp.dest('build/vendor'))
})

gulp.task('reload:sass', ['sass'], function() {
  bs.reload()
})

gulp.task('reload:static', ['static','templates'], function() {
  bs.reload()
})

// gulp.task('scripts', ['templates'], function() {  
//   return gulp.src(paths.scripts)
//     .pipe(gulpConcat('ag.min.js'))
//     //.pipe(gulpClosure())
//     .pipe(gulpNgAnnotate())
//     .pipe(gulpUglify({mangle: false}))
//     .pipe(gulp.dest(paths.dist))
// })

// Concat and minify post scripts
// gulp.task('postscripts', function() {
//   return gulp.src(paths.postscripts)
//     .pipe(gulpConcat('postscripts.min.js'))
//     //.pipe(gulpClosure({window: true}))
//     .pipe(gulpUglify({mangle: false}))
//     .pipe(gulp.dest(paths.dist))
// })

// watch files for changes and reload
gulp.task('serve', ['build'], function() {
  bs.init({
    server: {
      baseDir: 'build',
      middleware: [ historyApiFallback() ]
    }
  })

  gulp.watch(['styles/**/*.scss'], {cwd: 'src'}, ['reload:sass'])
  gulp.watch(['*.html', 'app/**/*.html', 'app/**/*.js', 'scripts/**/*.js'], {cwd: 'src'}, ['reload:static']);
})
