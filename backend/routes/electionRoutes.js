const express = require('express');
const router = express.Router();
const { createCandidate, voteForCandidate, listCandidates } = require('../controllers/electionController');
const auth = require('../middleware/auth');

router.post('/create-candidate', auth, createCandidate);
router.post('/vote', auth, voteForCandidate);
router.get('/list-candidates', listCandidates);

module.exports = router;
