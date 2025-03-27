const { src, dest, task, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function scss() {
    return src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./assets/css'))
}

task('scss', scss)