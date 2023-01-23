const { src, dest } = require('gulp');

//Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


//Обработка JS 
const js = () => {
   return src(path.js.src, {sourcemaps: true})
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title:"JavaScript",
         message: error.message    
      }))
   }))
   .pipe(babel())
   .pipe(dest(path.js.dest,{sourcemaps: true}))
   .pipe(rename({
      suffix: '.min'
   }))
   .pipe(uglify())
   .pipe(dest(path.js.dest, {sourcemaps: true}))
}

module.exports = js;