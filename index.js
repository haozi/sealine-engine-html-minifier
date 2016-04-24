var htmlmin = require('html-minifier').minify;
var pkg = require('./package.json');
var logger = require('sealine.logger')(pkg.name);

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
