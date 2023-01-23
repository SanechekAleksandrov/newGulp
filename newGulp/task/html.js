const { src, dest } = require('gulp');

//Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const fileInclude = require('gulp-file-include');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

//Обработка HTML 
const html = () => {
   return src(path.html.src)
   .pipe(plumber({
      errorHandler: notify.onError(error => ({
         title:"HTML",
         message: error.message    
      }))
   }))
   .pipe(fileInclude())
   // .pipe(size({title:"До"}))
   // .pipe(htmlmin(htmlmin: {
   //    collapseWhitespace: true
   // }
   // .pipe(size({title:"После"}))
   .pipe(dest(path.html.dest))
}

module.exports = html;