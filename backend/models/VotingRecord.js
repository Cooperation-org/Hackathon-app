const mongoose = require('mongoose');

const VotingRecordSchema = new mongoose.Schema({
    did: { type: String, required: true },
    candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Election', required: true },
    votedAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('VotingRecord', VotingRecordSchema);
  