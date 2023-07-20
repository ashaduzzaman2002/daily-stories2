const mongoose = require('mongoose');

const storiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  
  category: {
    type: String,
    enum: ['Horror', 'Comedy', 'Romantic', 'Detective', 'Adventure'],
    required: true
  },
  image: {
    type: String,
  },
}, {
  timestamps: true
});

storiesSchema.index({ name: 'text', description: 'text' });


module.exports = mongoose.model('Stories', storiesSchema);