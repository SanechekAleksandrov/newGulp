const { src, dest } = require('gulp');

//Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');



//Обработка Images 
const img = () => {
   return src(path.img.src)
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title:"Image",
         message: error.message    
      }))
   }))
   .pipe(newer(path.img.dest))
   .pipe(imagemin({
      verbose: true
   }))
   .pipe(dest(path.img.dest))
}

module.exports = img;