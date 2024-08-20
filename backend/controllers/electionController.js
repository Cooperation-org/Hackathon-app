const Election = require('../models/Election');
const Election = require('../models/Election');
const VotingRecord = require('../models/VotingRecord');
const { voteOnBlockchain } = require('../utils/hedera');

exports.createCandidate = async (req, res) => {
  const { candidateName, position, description } = req.body;

  try {
    const candidate = new Election({
      candidateName,
      position,
      description,
      status: 'ongoing',
      votes: 0
    });

    await candidate.save();

    res.status(201).json(candidate);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};



exports.listCandidates = async (req, res) => {
  const { filterBy, value } = req.query;

  try {
    let candidates;
    if (filterBy && value) {
      candidates = await Election.find({ [filterBy]: value });
    } else {
      candidates = await Election.find();
    }

    res.status(200).json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};



exports.voteForCandidate = async (req, res) => {
  const { candidateId } = req.body;
  const userDid = req.user.did;

  try {
    // Check if the user has already voted
    const existingVote = await VotingRecord.findOne({ did: userDid, candidateId });
    if (existingVote) {
      return res.status(400).json({ msg: 'You have already voted for this candidate' });
    }

    // Find the candidate
    const candidate = await Election.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({ msg: 'Candidate not found' });
    }

    // Record the vote on Hedera
    const transactionStatus = await voteOnBlockchain(userDid, candidateId);
    if (transactionStatus.toString() !== 'SUCCESS') {
      return res.status(500).json({ msg: 'Failed to record vote on the blockchain' });
    }

    // Increment vote count
    candidate.votes += 1;
    await candidate.save();

    // Record that the user has voted
    const voteRecord = new VotingRecord({ did: userDid, candidateId });
    await voteRecord.save();

    res.status(200).json({ msg: 'Vote recorded successfully', candidate });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
