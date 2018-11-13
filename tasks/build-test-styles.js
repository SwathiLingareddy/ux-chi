import path from 'path';

import del from 'del';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulp from 'gulp';
import metalsmith from 'metalsmith';
import metalsmithInlineSource from 'metalsmith-inline-source';
import metalsmithLayouts from 'metalsmith-layouts';
import metalsmithPug from 'metalsmith-pug';
import runSequence from 'run-sequence';
import * as chi from '../scripts/chi';

const plugins = require('gulp-load-plugins')();
const publicFolder = 'dist/tests';
const rootFolder = path.join(__dirname, '..');

gulp.task('build:test:styles', () =>
  gulp.src(path.join(rootFolder, 'test', 'chi', '**', '*.scss'))
    .pipe(plugins.plumber())
    .pipe(plugins.sass({
      includePaths: [
        'node_modules',
        path.join(rootFolder, 'src', 'chi')
      ],
      outputStyle: 'compressed'
    })
    .on('error', plugins.sass.logError))
    .pipe(plugins.postcss([
      autoprefixer({
        browsers: ['last 2 versions', 'ie >= 10']
      }),
      cssnano({zindex: false})
    ]))
    .pipe(gulp.dest(publicFolder))
    .pipe(plugins.wait(1500))
    .pipe(plugins.connect.reload())
);
