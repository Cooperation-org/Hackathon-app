const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Create a new user
 *     description: This is one of the methods of creating a user on the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: The fullname of the new user
 *                 example: johndoe
 *               walletAddress:
 *                 type: string
 *                 description: The wallet id address of the new user
 *                 example: 0.0.14.0
 *               email:
 *                 type: string
 *                 description: The email address of the new user
 *                 example: john@description.com
 *               password:
 *                 type: string
 *                 description: The password for the new user
 *                 example: securepassword
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Registration Successful
 *       400:
 *         description: Bad request response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid input data"
 */
router.post('/register', register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     description: This is one of the methods of logging in a user on the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               walletAddress:
 *                 type: string
 *                 description: The wallet id address of the user
 *                 example: 0.0.14.0
 *               password:
 *                 type: string
 *                 description: The password for the user
 *                 example: securepassword
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login Successful
 *       400:
 *         description: Bad request response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid input data"
 */
router.post('/login', login);

module.exports = router;
