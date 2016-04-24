var pkg = require('./package.json');
var logger = require('sealine.logger')(pkg.name);

try {
  require('html-minifier');
} catch (e) {
  logger.error('please run `npm install html-minifier --save`')
}
var htmlmin = require('html-minifier').minify;
module.exports = function(code, config) {
  return new Promise((resolve, reject) => {
    try {
      var html = htmlmin(code, config);
      resolve(html);
    } catch (e) {
      if (e) {
        logger.error(e);
        reject(e);
      }
    }
  });
}
