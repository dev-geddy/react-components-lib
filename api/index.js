var express = require('express')
var app = express()

var configCssLocation = __dirname + '/static/css/';

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
})

app.use('/cdn/', express.static(__dirname + '/static'))

app.use('/get-css-source/:fileName', function (req, res, next) {
  var cssToServe = configCssLocation + req.params.fileName;
  console.log("CSS file: " + cssToServe);

  fs = require('fs');
  fs.readFile(cssToServe, 'utf8', function (err, cssString) {
    if (err) {
      res.json({data: {css: '/* No CSS available... */'}})
      return console.log("ERROR! ", err);
    }
    // console.log("CSS code: ", cssString);
    res.json({data: {css: cssString}});
  });

})

app.listen(3601)