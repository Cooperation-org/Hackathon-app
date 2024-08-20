const mongoose = require('mongoose');

const ElectionSchema = new mongoose.Schema({
  candidateName: { type: String, required: true },
  position: { type: String, required: true },
  description: { type: String, required: true },
  votes: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ['not_started', 'ongoing', 'ended'],
    default: 'ongoing'
  }
});

module.exports = mongoose.model('Election', ElectionSchema);
