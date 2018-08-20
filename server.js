var express = require('express')
var app = express();
const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/assignment', {useNewUrlParser: true } );
mongoose.connect('mongodb://heroku_tq322vml:k9pufnn9n2876feaotg9u90qjq@ds125912.mlab.com:25912/heroku_tq322vml',
  {useNewUrlParser: true });

app.use(function(req, res, next) {

  var allowedOrigins = [
    "http://localhost:4200",
    "https://court-angular-app.herokuapp.com"
  ];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get('/', function (req, res) {
  res.send('Node.js app deployed successfully!')
});

var courtService = require('./services/court.service.server');
courtService(app);

app.listen(process.env.PORT || 4000);