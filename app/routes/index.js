const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

const ctrlAuth = require('../controllers/auth');
const ctrlDirection = require('../controllers/direction');
// directions
router.get('/direction', auth, ctrlDirection.getDirection);
router.post('/direction', auth, ctrlDirection.saveDirection);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;