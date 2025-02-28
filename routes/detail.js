const express = require('express');
const router = express.Router();
const detailController = require('../controllers/detailController');
// Import verifyToken middleware

// Route to fetch user details (protected with verifyToken)
router.get('/detail/:uniqueid',detailController.getUserDetails);

module.exports = router;
