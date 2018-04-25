'use strict';


/**
 * Get all current available beacons.
 * Fetches all registered beacons from the database.
 *
 * returns inline_response_200_1
 **/
exports.getAllZonesPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0.80082819046101150206595775671303272247314453125,
  "data" : [ {
    "attachmentKey" : "shaiep-walla-com-s-proximi-e0f",
    "attachmentValue" : "example-proximity-zone",
    "uuId" : "uuId"
  }, {
    "attachmentKey" : "attachmentKey",
    "attachmentValue" : "attachmentValue",
    "uuId" : "uuId"
  } ],
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
 * Receives all offers for beacon
 * Receives all offers for beacon
 *
 * body Body 
 * returns inline_response_200_2
 **/
exports.getOffersForBeaconPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0.80082819046101150206595775671303272247314453125,
  "data" : [ {
    "targetAudience" : {
      "gender" : "gender",
      "maxAge" : 6.02745618307040320615897144307382404804229736328125,
      "minAge" : 0.80082819046101150206595775671303272247314453125
    },
    "description" : "description",
    "comment" : "comment",
    "expiration" : "expiration",
    "title" : "title"
  }, {
    "targetAudience" : {
      "gender" : "gender",
      "maxAge" : 6.02745618307040320615897144307382404804229736328125,
      "minAge" : 0.80082819046101150206595775671303272247314453125
    },
    "description" : "description",
    "comment" : "comment",
    "expiration" : "expiration",
    "title" : "title"
  } ],
  "business" : {
    "owner" : "owner",
    "offers" : [ {
      "targetAudience" : {
        "gender" : "gender",
        "maxAge" : 6.02745618307040320615897144307382404804229736328125,
        "minAge" : 0.80082819046101150206595775671303272247314453125
      },
      "description" : "description",
      "comment" : "comment",
      "expiration" : "expiration",
      "title" : "title"
    }, {
      "targetAudience" : {
        "gender" : "gender",
        "maxAge" : 6.02745618307040320615897144307382404804229736328125,
        "minAge" : 0.80082819046101150206595775671303272247314453125
      },
      "description" : "description",
      "comment" : "comment",
      "expiration" : "expiration",
      "title" : "title"
    } ],
    "approved" : true,
    "address" : "address",
    "beacon" : {
      "attachmentKey" : "attachmentKey",
      "attachmentValue" : "attachmentValue",
      "uuId" : "uuId"
    },
    "name" : "name",
    "_id" : "_id"
  },
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

