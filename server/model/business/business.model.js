/*
business model.
*/

/** server config file. */
const config = require('../../server.conf.json');

/** http://mongoosejs.com/
  mongoose provides a straight-forward, schema-based solution to model your application data.
  it includes built-in type casting, validation, query building, business logic hooks and more,
  out of the box.
*/
const mongoose = require('mongoose').set('debug', config.DEBUG_MONGOOSE);

const targetAudienceSchema = new mongoose.Schema({
  _id: { auto: false },
  minAge: { type: Number, min: 0, default: 0 },
  maxAge: { type: Number },
  gender: { type: String, enum: ['m', 'f'] }
})

const offerSchema = new mongoose.Schema({
  _id: { auto: false },
  title: { type: String },
  comment: { type: String },
  description: { type: String },
  targetAudience: {
    type: targetAudienceSchema
  },
  expiration: { type: Date }
});

const beaconSchema = new mongoose.Schema({
  _id: { auto: false },
  attachmentKey: { type: String },
  attachmentValue: { type: String },
  uuId: { type: String }
})

const businessSchema = new mongoose.Schema({
    name: { type: String },
    address: { type: String },
    beacon: { type: beaconSchema },
    // beacon: {
    //   attachmentKey: { type: String },
    //   attachmentValue: { type: String },
    //   uuId: { type: String }
    // },
    offers: { type: [offerSchema] },
    // approved: { type: Boolean, default: false, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' },
    geoId: { type: String, required: true, unique: true }
}, { 
  timestamps: true,
  strict: false
});

module.exports = mongoose.model('Business', businessSchema);