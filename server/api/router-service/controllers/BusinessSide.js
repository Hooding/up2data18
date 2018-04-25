'use strict';

var utils = require('../utils/writer.js');
var BusinessSide = require('../service/BusinessSideService');

module.exports.businessesBusinessIdPATCH = function businessesBusinessIdPATCH (req, res, next) {
  var businessId = req.swagger.params['businessId'].value;
  var business = req.swagger.params['business'].value;
  BusinessSide.businessesBusinessIdPATCH(businessId,business)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.businessesClaimBusinessIdPATCH = function businessesClaimBusinessIdPATCH (req, res, next) {
  var owner = req.swagger.params['owner'].value;
  var businessId = req.swagger.params['businessId'].value;
  BusinessSide.businessesClaimBusinessIdPATCH(owner,businessId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.businessesDeclaimBusinessIdPATCH = function businessesDeclaimBusinessIdPATCH (req, res, next) {
  var owner = req.swagger.params['owner'].value;
  var businessId = req.swagger.params['businessId'].value;
  BusinessSide.businessesDeclaimBusinessIdPATCH(owner,businessId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.businessesGET = function businessesGET (req, res, next) {
  var owner = req.swagger.params['owner'].value;
  BusinessSide.businessesGET(owner)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
