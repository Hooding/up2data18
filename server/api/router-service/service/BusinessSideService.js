'use strict';

const mongoose = require('mongoose');

const Business = require('../../../model/business/business.model');

/**
 * Update business info.
 * Updates the business info after an edit has happened on client side.
 *
 * businessId String 
 * business Business  (optional)
 * no response value expected for this operation
 **/
exports.businessesBusinessIdPATCH = function(businessId,business) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Claims the business.
 * Claims the business using the business id of the owner.
 *
 * owner String 
 * businessId String 
 * returns inline_response_200
 **/
exports.businessesClaimBusinessIdPATCH = function(owner,businessId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0.80082819046101150206595775671303272247314453125,
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Unclaims the business.
 * Unlaims the business using the business id of the owner.
 *
 * owner String 
 * businessId String 
 * returns inline_response_200
 **/
exports.businessesDeclaimBusinessIdPATCH = function(owner,businessId) {
  return new Promise(function(resolve, reject) {

    var examples = {};
    examples['application/json'] = {
      "code" : 0.80082819046101150206595775671303272247314453125,
      "message" : "message"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all businesses
 * Fetches all businesses owned by the owner and not owned by anyone.
 *
 * owner String 
 * returns List
 **/
exports.businessesGET = function(owner) {
  return new Promise(function(resolve, reject) {
    Business.find({}, (err, docs) => {
      console.log(err);
      var examples = {};
      examples['application/json'] = docs;
      console.log(docs);
      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    });
  });
}

