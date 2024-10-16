const express = require('express');
const router = express.Router();
const { createCandidate, voteForCandidate, listCandidates } = require('../controllers/electionController');
const auth = require('../middleware/auth');


/**
 * @swagger
 * /api/election/candidate:
 *   post:
 *     summary: Create a new candidate
 *     description: This endpoint creates a new candidate for an election.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               candidateName:
 *                 type: string
 *                 description: The name of the candidate
 *                 example: "John Doe"
 *               position:
 *                 type: string
 *                 description: The position the candidate is running for
 *                 example: "President"
 *               description:
 *                 type: string
 *                 description: A brief description of the candidate's platform or background
 *                 example: "An experienced leader with a focus on community development."
 *     responses:
 *       201:
 *         description: Candidate created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "60d0fe4f5311236168a109ca"
 *                 candidateName:
 *                   type: string
 *                   example: "John Doe"
 *                 position:
 *                   type: string
 *                   example: "President"
 *                 description:
 *                   type: string
 *                   example: "An experienced leader with a focus on community development."
 *                 status:
 *                   type: string
 *                   example: "ongoing"
 *                 votes:
 *                   type: number
 *                   example: 0
 *       500:
 *         description: Server error
 */
router.post('/create-candidate', auth, createCandidate);

/**
 * @swagger
 * /api/election/vote:
 *   post:
 *     summary: Vote for a candidate
 *     description: Cast a vote for a candidate. This will record the vote on the blockchain.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               candidateId:
 *                 type: string
 *                 description: The ID of the candidate you are voting for
 *                 example: "60d0fe4f5311236168a109ca"
 *     responses:
 *       200:
 *         description: Vote recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Vote recorded successfully"
 *                 candidate:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "60d0fe4f5311236168a109ca"
 *                     candidateName:
 *                       type: string
 *                       example: "John Doe"
 *                     position:
 *                       type: string
 *                       example: "President"
 *                     description:
 *                       type: string
 *                       example: "An experienced leader with a focus on community development."
 *                     status:
 *                       type: string
 *                       example: "ongoing"
 *                     votes:
 *                       type: number
 *                       example: 11
 *       400:
 *         description: Bad request, user has already voted or candidate not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "You have already voted for this candidate"
 *       404:
 *         description: Candidate not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Candidate not found"
 *       500:
 *         description: Server error
 */
router.post('/vote', auth, voteForCandidate);

/**
 * @swagger
 * /api/election/candidates:
 *   get:
 *     summary: List candidates
 *     description: Retrieve a list of candidates. You can filter candidates based on certain criteria.
 *     parameters:
 *       - in: query
 *         name: filterBy
 *         schema:
 *           type: string
 *         description: The field to filter candidates by (e.g., position, status).
 *         example: "position"
 *       - in: query
 *         name: value
 *         schema:
 *           type: string
 *         description: The value of the filter field.
 *         example: "President"
 *     responses:
 *       200:
 *         description: A list of candidates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "60d0fe4f5311236168a109ca"
 *                   candidateName:
 *                     type: string
 *                     example: "John Doe"
 *                   position:
 *                     type: string
 *                     example: "President"
 *                   description:
 *                     type: string
 *                     example: "An experienced leader with a focus on community development."
 *                   status:
 *                     type: string
 *                     example: "ongoing"
 *                   votes:
 *                     type: number
 *                     example: 10
 *       500:
 *         description: Server error
 */
router.get('/list-candidates', listCandidates);

module.exports = router;
