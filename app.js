'use strict';

var config = require('./config');
var express = require('express');
var app = express();
var port = process.env.PORT || config.port;

app.set('env', config.mode);

app.get('/', function (req, res) {
  res.send('blackmagicwoman');
});

var server = app.listen(port, function () {

  var host = server.address().address;

  console.log('Example app listening at http://%s:%s', host, port);

});
