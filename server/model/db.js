/*
custom-made database connection manager module.
*/

/** server config file. */
const config = require('../server.conf.json');

/** custom-made logger module. use logger.log(...) */
const logger = require('../util/logger');

/** http://mongoosejs.com/
  mongoose provides a straight-forward, schema-based solution to model your application data.
  it includes built-in type casting, validation, query building, business logic hooks and more,
  out of the box.
*/
const mongoose = require('mongoose').set('debug', config.DEBUG_MONGOOSE);

// /** remote db username */
const username = '';

// /** remote db password */
const password = '';

// /** remote mongodb link */
const remoteDB = `mongodb://${username}:${password}@` + '';

/** local mongodb link used a fallback when remoteDB is inaccessible. */
// const localDB = 'mongodb://localhost:27017/nbrs';
const localDB = 'mongodb://localhost:32768/nbrs';


/** current database connection link. */
let currentDB;

/* assign promise library. */
mongoose.Promise = global.Promise;

/** connection to database */
const connection = mongoose.connection;

/** connection attempts. */
let attempts = 0;

/* on connection failed: by default, if failed on remote, try to connect to local. */
connection.on('error', () => {
    logger.error('DB', 'db.js:mongoose.connect', `failed connecting to: ${currentDB}`);

    if (!config.CONNECT_TO_LOCAL) {
        if (atempts++ < config.MAXIMUM_ATTEMPTS) {
            mongoose.connect(remoteDB);
        } else if (config.FALLBACK_TO_LOCAL && currentDB !== localDB) {
            mongoose.connect((currentDB = localDB), {useMongoClient: true});
        }
    }
});

/* on successful connection, log a message. */
connection.once('open', () => {
    logger.info('DB', 'db.js:mongoose.connect', `successfully connected to: ${currentDB}`);
});

const Owner = require('../model/owner/owner.model');
const Business = require('../model/business/business.model');
const Visit = require('../model/visit/visit.model');

/**
 * connect to database.
 */
exports.connect = () => {
    mongoose.connect(currentDB = config.CONNECT_TO_LOCAL ? localDB : remoteDB);
};