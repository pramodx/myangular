var gulp = require('gulp');
var gulpif = require('gulp-if');
var args = require('yargs').argv;
var Server = require('karma').Server;

var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var del = require('del');

var src = 'src/';
var dist = 'dist/';

var tsconfig = typescript.createProject('tsconfig.json');

gulp.task('build-ts', function () {
    return gulp.src(src + 'app/**/*.ts')
        .pipe(gulpif(!args.production, sourcemaps.init()))
        .pipe(typescript(tsconfig))
        .pipe(gulpif(!args.production, sourcemaps.write()))
        .pipe(gulp.dest(dist + 'app'));
});

gulp.task('build-copy', function () {
    gulp.src([src + 'app/**/*.html', src + 'app/**/*.htm', src + 'app/**/*.css'])
        .pipe(gulp.dest(dist + 'app'));

    gulp.src([src + 'index.html'])
        .pipe(gulp.dest(dist));

    return gulp.src([src + 'systemjs.config.js'])
        .pipe(gulp.dest(dist));
});

gulp.task('clean', function() {
   del([dist + '/**/*.html', dist + '/**/*.htm', dist + '/**/*.css'], dist + 'app');
});

gulp.task('vendor', function() {
    del([dist + '/vendor/**/*']);

    gulp.src(['node_modules/@angular/**'])
        .pipe(gulp.dest(dist + 'vendor/@angular'));

    //reflect metadata
    gulp.src('node_modules/reflect-metadata/**')
        .pipe(gulp.dest(dist + '/vendor/reflect-metadata/'));

    //rxjs
    gulp.src('node_modules/rxjs/**')
        .pipe(gulp.dest(dist + '/vendor/rxjs/'));

    //systemjs
    gulp.src('node_modules/systemjs/**')
        .pipe(gulp.dest(dist + '/vendor/systemjs/'));

    // ng2-bootstrap
    gulp.src('node_modules/ng2-bootstrap/**')
        .pipe(gulp.dest(dist + '/vendor/ng2-bootstrap/'));

    //zonejs
    return gulp.src('node_modules/zone.js/**')
        .pipe(gulp.dest(dist + '/vendor/zone.js/'));
});

gulp.task('test', function (done) {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('watch', function() {
   gulp.watch(src + '**/*.ts', ['build-ts']);
   gulp.watch(src + '**/*.{html,htm,css}', ['build-copy']);
});

gulp.task('build', ['build-ts', 'build-copy']);
gulp.task('default', ['build', 'watch']);
