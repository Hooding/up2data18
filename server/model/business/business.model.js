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
  title: { type: String, required: true },
  comment: { type: String },
  description: { type: String },
  targetAudience: {
    type: targetAudienceSchema,
    required: true
  },
  expiration: { type: Date }
});

const beaconSchema = new mongoose.Schema({
  _id: { auto: false },
  attachmentKey: { type: String, required: true, unique: true },
  attachmentValue: { type: String, required: true },
  uuId: { type: String, required: true, unique: true }
})

const businessSchema = new mongoose.Schema({
    Name: { type: String },
    address: { type: String },
    beacon: { type: beaconSchema },
    offers: { type: [offerSchema], required: true },
    // approved: { type: Boolean, default: false, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }
}, { 
  timestamps: true,
  strict: false
});

module.exports = mongoose.model('Business', businessSchema);