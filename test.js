var htmlmin = require('./index.js');

var html = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </body>
  </html>
`;


htmlmin(html, {
  minifyCSS: true,
  minifyJS: true,
  "collapseBooleanAttributes": true,
  "collapseWhitespace": true,
  "decodeEntities": true,

  "html5": true,
  "processConditionalComments": true,
  "processScripts": [
    "text/html"
  ],
  "removeAttributeQuotes": true,
  "removeComments": true,
  "removeEmptyAttributes": true,
  "removeOptionalTags": true,
  "removeRedundantAttributes": true,
  "removeScriptTypeAttributes": true,
  "removeStyleLinkTypeAttributes": true,
  "removeTagWhitespace": true,
  "useShortDoctype": true,

}).then(html => {
  console.log(html);
});
