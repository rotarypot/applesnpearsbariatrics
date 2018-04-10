var gulp = require('gulp');
var browserSync = require('browser-sync').create();

 
// var paths = {
//   scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
//   images: 'client/img/**/*'
// };
 
// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use any package available on npm 
// gulp.task('clean', function() {
//   // You can use multiple globbing patterns as you would with `gulp.src` 
//   return del(['build']);
// });
 
// gulp.task('scripts', ['clean'], function() {
//   // Minify and copy all JavaScript (except vendor scripts) 
//   // with sourcemaps all the way down 
//   return gulp.src(paths.scripts)
//     .pipe(sourcemaps.init())
//       .pipe(coffee())
//       .pipe(uglify())
//       .pipe(concat('all.min.js'))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('build/js'));
// });
 
// Copy all static images 
// gulp.task('images', ['clean'], function() {
//   return gulp.src(paths.images)
//     // Pass in options to the task 
//     .pipe(imagemin({optimizationLevel: 5}))
//     .pipe(gulp.dest('build/img'));
// });
 
// Rerun the task when a file changes 
// gulp.task('watch', function() {
//   gulp.watch('*.html', browserSync.reload);
//   gulp.watch(paths.images, ['images']);
// });


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(["*.html", "css/*.css", "js/*.js"]).on('change', browserSync.reload);
});



 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['browser-sync' ]);