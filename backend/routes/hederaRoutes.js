const express = require('express');
const router = express.Router();
const { signUpWithMetaMask, signInWithMetaMask } = require('../controllers/hederaController');


/**
 * @swagger
 * /api/metamask/signup:
 *   post:
 *     summary: Sign up using MetaMask
 *     description: This endpoint allows a user to sign up with their MetaMask wallet by verifying their wallet address signature. A Hedera DID is generated for the user upon successful registration.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               walletAddress:
 *                 type: string
 *                 description: The wallet address of the user
 *                 example: "0x1234567890abcdef1234567890abcdef12345678"
 *               signature:
 *                 type: string
 *                 description: The signed message from the user's MetaMask wallet
 *                 example: "0x..."
 *               email:
 *                 type: string
 *                 description: The email address of the user
 *                 example: "johndoe@example.com"
 *     responses:
 *       201:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for authentication
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                 hederaDid:
 *                   type: string
 *                   description: The Hedera DID assigned to the user
 *                   example: "did:hedera:testnet:0.0.1234567890abcdef"
 *       400:
 *         description: Bad request, such as invalid signature or user already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Invalid signature" 
 *       500:
 *         description: Server error
 */
router.post('/signup', signUpWithMetaMask);

/**
 * @swagger
 * /api/metamask/signin:
 *   post:
 *     summary: Sign in using MetaMask
 *     description: This endpoint allows a user to sign in with their MetaMask wallet by verifying their wallet address signature.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               walletAddress:
 *                 type: string
 *                 description: The wallet address of the user
 *                 example: "0x1234567890abcdef1234567890abcdef12345678"
 *               signature:
 *                 type: string
 *                 description: The signed message from the user's MetaMask wallet
 *                 example: "0x..."
 *     responses:
 *       200:
 *         description: User successfully signed in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for authentication
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                 hederaDid:
 *                   type: string
 *                   description: The Hedera DID assigned to the user
 *                   example: "did:hedera:testnet:0.0.1234567890abcdef"
 *       400:
 *         description: Bad request, such as invalid signature or user not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Invalid signature" 
 *       500:
 *         description: Server error
 */
router.post('/signin', signInWithMetaMask);

module.exports = router;



