/*
 * application's server side starting point (main).
 */

/** server config file. */
const config = require('./server.conf.json');

/** https://expressjs.com/
  express is a minimal and flexible Node.js web application framework that provides a
  robust set of features for web and mobile applications.
*/
const express = require('express');

/** https://nodejs.org/api/path.html
  the path module provides utilities for working with file and directory paths.
*/
const path = require('path');

/** https://nodejs.org/api/http.html
  the http interfaces in Node.js are designed to support many features of the protocol
  which have been traditionally difficult to use.
*/
const http = require('http');

/** https://www.npmjs.com/package/body-parser
 Node.js body parsing middleware. parse incoming request bodies in a middleware before
 your handlers, available under the req.body property.
 */
const bodyParser = require('body-parser');

/** https://github.com/expressjs/compression
 * node.js compression middleware. the following compression codings are supported:
 * deflate, gzip.
 */
const compression = require('compression');

/** https://github.com/node-schedule/node-schedule
 * Node Schedule is a flexible cron-like and not-cron-like job scheduler for Node.js. 
 * It allows you to schedule jobs (arbitrary functions) for execution at specific dates, 
 * with optional recurrence rules. It only uses a single timer at any given time (rather 
 * than reevaluating upcoming jobs every second/minute).
 */
const scheduler = require('node-schedule');

/** custom-made logger module. */
const logger = require('./util/logger');

/** custom-made database connection module. */
const db = require('./model/db');

/** custom-made router module. */
// const router = require('./controller/router');

/** express.js application. */
const app = express();

/** port number for application, retrieved from environment. defaults to 8080. */
// const port = process.env.PORT || config.DEFAULT_APPLICATION_PORT;
const port = config.DEFAULT_APPLICATION_PORT;

/** custom-made error handler. */
const errorHandler = require('./util/error-handler');

/* tells the application to use JSON. */
app.use(bodyParser.json());

/* tells the application to use simple algorithm for shallow parsing.
  set to 'extended: true' to enable complex algorithm for deep parsing
  that can deal with nested objects. */
  app.use(bodyParser.urlencoded({
	extended: config.DEEP_PARSING
}));

/* point static path to build folder. */
app.use(express.static(path.join(__dirname, '../public')));

/* compress all responses. */
app.use(compression());

/* setup api's routes in application. */
// app.use('/api', router);

/* return index file when other routes are requested. */
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

/* set application's port. */
app.set('port', port);

/* set application's environment. */
app.set('env', config.ENVIRONMENT);

/* add errorHandler to application middleware functions. */
if (config.CUSTOM_ERROR_HANDLER) {
	app.use(errorHandler);
}

/** http server. */
const server = http.createServer(app);


/* listen on provided port, on all network interfaces.
    connect to database. */
server.listen(port, () => {
    logger.info('HTTP-SERVER', 'server.js:server.listen', `server listening on localhost:${port}`);
    db.connect();
});

const dataFetcher = require('./util/data-fetcher.js');

dataFetcher.fetch();

scheduler.scheduleJob('* */1 * * *', () => {
  dataFetcher.fetch();
});