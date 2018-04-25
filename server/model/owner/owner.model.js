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

/** encryption lib. */
const bcrypt = require('bcrypt');

const ownerSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
    // businesses: { type: [mongoose.Schema.Types.ObjectId], ref: 'Business', unique: true }
}, {
    timestamps: true
});

ownerSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {
            return next(err);
        }

        user.password = hash;
        return next();
    });
});

module.exports = mongoose.model('Owner', ownerSchema);