var mongoose = require('mongoose');
var courtSchema = require('./court.schema.server');
var courtModel = mongoose.model('CourtModel', courtSchema);

function findAllCourts() {
  return courtModel.find();
}

var api = {
  findAllCourts: findAllCourts
};

module.exports = api;