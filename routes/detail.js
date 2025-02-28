const express = require('express');
const router = express.Router();
const detailController = require('../controllers/detailController');
const { verifyToken } = require('../middleware/verifyToken'); // Import verifyToken middleware

// Route to fetch user details (protected with verifyToken)
router.get('/detail/:uniqueid', verifyToken, detailController.getUserDetails);

module.exports = router;
