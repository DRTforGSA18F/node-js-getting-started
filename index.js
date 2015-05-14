var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');
var test = require('./models/mongolab.js');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  var result = ''
  var times = process.env.TIMES || 5
  for (i=0; i < times; i++)
    result += cool();
  response.send(result);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
})