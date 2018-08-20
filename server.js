var express = require('express')
var app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/assignment', {useNewUrlParser: true } );

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

var courtService = require('./services/court.service.server');
courtService(app);

app.listen(4000);