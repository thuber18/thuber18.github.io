var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

/**
 * Converts index.nunjucks into index.html
*/
gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('pages/**/*.+(html|njk)')
  // adding data to Nunjucks
  .pipe(data(function() {
    return require('./data.json')
  }))
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['templates']
    }))
  // output files in project folder
  .pipe(gulp.dest('.'))
});