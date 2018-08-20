var mongoose = require('mongoose');

var courtSchema = mongoose.Schema({
  Account: Number,
  Date: String,
  Channel: String,
  time: String,
  PowerFactor: Number,
  kWh: Number,
  month: Number,
  year: Number,
  day: Number,
  hour: Number,
  minute: Number
}, {collection: 'court'});

module.exports = courtSchema;


