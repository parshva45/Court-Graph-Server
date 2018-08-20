module.exports = function (app) {
  app.get('/api/court', findAllCourts);
  var courtModel = require('../models/court/court.model.server');
  function findAllCourts(req, res) {
    courtModel.findAllCourts()
      .then(function (courts) {
        res.send(courts);
      });
  }
};
