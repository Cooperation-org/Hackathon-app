const User = require('../models/User');
const { createHederaDid } = require('../utils/hedera');
const jwt = require('jsonwebtoken');
const ethers = require('ethers');

exports.signUpWithMetaMask = async (req, res) => {
  const { walletAddress, signature, email } = req.body;

  try {
    // Verify the signature
    const message = `Sign this message to authenticate with your wallet address: ${walletAddress}`;
    const signerAddress = ethers.utils.verifyMessage(message, signature);

    if (signerAddress.toLowerCase() !== walletAddress.toLowerCase()) {
      return res.status(400).json({ msg: 'Invalid signature' });
    }

    // Check if the user already exists
    let user = await User.findOne({ walletAddress });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Generate Hedera DID
    const hederaDid = await createHederaDid(walletAddress);

    // Create the new user
    user = new User({
      fullName: "", // MetaMask doesn't provide full name, leave it empty or allow user to update later
      walletAddress,
      email,
      password: "", // Password not needed for MetaMask users
      hederaDid
    });

    await user.save();

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, hederaDid });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.signInWithMetaMask = async (req, res) => {
    const { walletAddress, signature } = req.body;
  
    try {
      // Verify the signature
      const message = `Sign this message to authenticate with your wallet address: ${walletAddress}`;
      const signerAddress = ethers.utils.verifyMessage(message, signature);
  
      if (signerAddress.toLowerCase() !== walletAddress.toLowerCase()) {
        return res.status(400).json({ msg: 'Invalid signature' });
      }
  
      // Check if the user exists
      let user = await User.findOne({ walletAddress });
      if (!user) {
        return res.status(400).json({ msg: 'User not found' });
      }
  
      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token, hederaDid: user.hederaDid });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  