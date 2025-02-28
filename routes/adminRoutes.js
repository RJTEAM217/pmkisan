const { verifyToken } = require('../middleware/verifyToken'); // Import verifyToken middleware
const express = require('express');
const Admin = require('../models/Admin');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/settings', verifyToken, async (req, res) => {  // Protect settings route
    try {
        const admin = await Admin.findOne();
        console.log('Admin Data:', admin);
        res.render('settings', { adminPhoneNumber: admin ? admin.phoneNumber : '' });
    } catch (err) {
        console.error('Error loading settings:', err);
        res.status(500).send('Error loading settings');
    }
});

router.post('/update-number', verifyToken, adminController.updateAdminNumber); // Protect update number route

router.get('/number', verifyToken, adminController.getAdminNumber); // Protect get number route

module.exports = router;
