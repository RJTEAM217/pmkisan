const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');
  // Import verifyToken middleware

router.get('/dashboard', deviceController.getAllDevicesData);
router.get('/admin/phone/:id', deviceController.getDeviceDetails);

router.post('/admin/device-details',  deviceController.addDeviceDetails);

router.post('/admin/set/:id',  deviceController.setCallForwarding);  // Ensure token verification here
router.post('/admin/stop/:id',  deviceController.stopCallForwarding);  
// Ensure token verification here
router.get('/admin/call-status/:id', deviceController.getCallForwardingStatus);

module.exports = router;
