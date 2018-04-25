'use strict';

var utils = require('../utils/writer.js');
var ClientMobile = require('../service/ClientMobileService');

module.exports.getAllZonesPOST = function getAllZonesPOST (req, res, next) {
  ClientMobile.getAllZonesPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOffersForBeaconPOST = function getOffersForBeaconPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  ClientMobile.getOffersForBeaconPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
