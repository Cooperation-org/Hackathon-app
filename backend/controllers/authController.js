const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { createHederaDid } = require('../utils/hedera');

exports.register = async (req, res) => {
    const { fullName, walletAddress, email, password } = req.body;
    
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const hederaDid = await createHederaDid(walletAddress);
  
      user = new User({
        fullName,
        walletAddress,
        email,
        password: hashedPassword,
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
  

exports.login = async (req, res) => {
  const { walletAddress, password } = req.body;

  try {
    let user = await User.findOne({ walletAddress });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, hederaDid: user.hederaDid });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
