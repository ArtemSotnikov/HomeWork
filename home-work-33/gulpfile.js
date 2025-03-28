const { src, dest, task, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sortMediaQueries = require('postcss-sort-media-queries');

//Leave it here to use it in further projects, if needed.
//function scss() {
//    return src('./src/**/*.scss')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(dest('./assets/css'))
//        .pipe(browserSync.stream());
//}

const plugins = [
    autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        cascade: true
    }),
    sortMediaQueries,
    cssnano({ preset: 'default' })
  ]

function scssMin() {
    return src('./src/**/*.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./assets/css', { sourcemaps: true }))
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
    watch('./src/**/*.scss', scssMin)
    watch('./*.html', sync)
    watch('./*.js', sync)
    done();
}

task('watch', series(scssMin, syncInit, watchFiles));
