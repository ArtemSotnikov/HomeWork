const { src, dest, task, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function scss() {
    return src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./assets/css'))
        .pipe(browserSync.stream());
}

function syncInit (done) {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    done();
}

function sync(done) {
    browserSync.reload()
    done();
}

function watchFiles(done) {
    watch('./src/**/*.scss', scss)
    watch('./*.html', sync)
    watch('./*.js', sync)
    done();
}

task('watch', series(scss, syncInit, watchFiles));
