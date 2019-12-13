const express = require('express');
const controller = require('../controller/controller.js');
router = express.Router();

router.route('/getExercise').get(controller.getExcercise);
router.route('/getSellerDetails').get(controller.getSellerDetails);
router.route('/getAvailableAppointments').get(controller.getAvailableAppointments);
router.route('/bookAppointmentSlot').get(controller.bookAppointmentSlot);



module.exports = router;
