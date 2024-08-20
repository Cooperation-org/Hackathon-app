const express = require('express');
const router = express.Router();
const { signUpWithMetaMask, signInWithMetaMask } = require('../controllers/hederaController');

router.post('/signup', signUpWithMetaMask);
router.post('/signin', signInWithMetaMask);

module.exports = router;



