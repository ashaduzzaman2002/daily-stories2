const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true
  },

  status: {
    type:String,
    required: true
  },

  avtar: {
    type: String,
    default: ''
  }
}, {
    timestamps: true
});

module.exports = mongoose.model('Admin', adminSchema);
