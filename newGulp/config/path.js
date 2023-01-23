const pathSrc = './src';
const pathDest = './dist';

module.exports = {
   root: pathDest,


   html:{
      src:pathSrc + '/**/*.html',
      watch: pathSrc + '/**/*.html',
      dest: pathDest
   },
   css:{
      src:pathSrc + 'css/**/*.css',
      watch: pathSrc + 'css/**/*.css',
      dest: pathDest + '/css'
   },
   scss:{
      src:pathSrc + '/scss/**/*.scss',
      watch: pathSrc + '/scss/**/*.scss',
      dest: pathDest + '/css'
   },
   js:{
      src:pathSrc + '/js/**/*.js',
      watch: pathSrc + '/js/**/*.js',
      dest: pathDest + '/js'
   },
   img:{
      src:pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
      watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
      dest: pathDest + '/img'
   },


}