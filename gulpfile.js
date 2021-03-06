const gulp = require('gulp'),
    browserSync = require('browser-sync').create();

const app ="app/",
    dist = "dist";

const config = {
    app : {
        html : app + 'pug/index.pug',
        style : app + 'scss/**/*.*',
        js : app + 'js/**/*/*',
        fonts : app + 'fonts/**/*.*',
        img : app + 'img/**/*.*'
    },
    dist : {
        html : dist,
        style : dist + 'css',
        js : dist + 'js/',
        fonts : dist + 'fonts/',
        img : dist + 'img/'

    },
    watch : {
        html : app + 'pug/index.pug',
        style : app + 'scss/**/*.*',
        js : app + 'js/**/*/*',
        fonts : app + 'fonts/**/*.*',
        img : app + 'img/**/*.*'
    }
}

const webServer = () => {
    browserSync.init({
        server : {
            baseDir: dist
        },
        port: 9000,
        host: 'localhost',
        notify: false
    })
}

const pugTask = () => {
    return gulp.src(config.app.html)
        .pipe(pug())
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest(config.dist.html))
        .pipe(browserSync.reload({ stream: true }))
}
