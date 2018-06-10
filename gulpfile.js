

var gulp = require('gulp'), 
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'), 
    htmlmin = require('gulp-htmlmin'),
    less = require('gulp-less'), 
    webserver = require('gulp-webserver'),
    concat = require('gulp-concat');


  gulp.task('css', function(){
	gulp.src(`./assets/styles/*.less`)
        .pipe(less())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cleanCSS())
        .pipe(concat('all.css'))
		.pipe(gulp.dest('public/css'));
	
});

gulp.task('js', function() {
    gulp.src(['./assets/js/*/*', './assets/js/*']) 
        .pipe(uglify()) 
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./public/js/')) 
});


gulp.task('images', function() {
   return gulp.src('./assets/images/**/*') 
        .pipe(imagemin()) 
        .pipe(gulp.dest('./public/images/')) 

});

gulp.task('minify', function() {
    return gulp.src('assets/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./public/'));
  });
  gulp.task('font', function() {
    return gulp.src('assets/font/*')
      .pipe(gulp.dest('./public/font/'));
  });
  gulp.task('web-srv', function() {
    gulp.src('public')
        .pipe(webserver({
        fallback: 'index.html'
        }));
});


gulp.task('watch', function () {
	gulp.watch('./assets/styles/**/*.less', ['css']); 
	gulp.watch('./assets/js/**/*.js', ['js']);
    gulp.watch('./assets/images/**/*', ['images']);
    gulp.watch('./assets/*', ['minify']);
    gulp.watch('./assets/font/*', ['font']);
});


// Default Task
gulp.task('default', ['css', 'js', 'images', 'font', 'minify', 'watch', "web-srv"]);

