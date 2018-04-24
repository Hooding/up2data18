/*
visit model.
*/

/** server config file. */
const config = require('../../server.conf.json');

/** http://mongoosejs.com/
  mongoose provides a straight-forward, schema-based solution to model your application data.
  it includes built-in type casting, validation, query building, business logic hooks and more,
  out of the box.
*/
const mongoose = require('mongoose').set('debug', config.DEBUG_MONGOOSE);

const visitSchema = new mongoose.Schema({
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Visit', visitSchema);
