'use strict';


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
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

