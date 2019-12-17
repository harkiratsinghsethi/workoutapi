const express = require('express');
const controller = require('../controller/controller.js');
router = express.Router();

router.route('/getExercise').get(controller.getExcercise);
router.route('/getSellerDetails').get(controller.getSellerDetails);
router.route('/getAvailableAppointments').get(controller.getAvailableAppointments);
router.route('/bookAppointmentSlot').get(controller.bookAppointmentSlot);

router.route('/findSellerID').get(controller.findSellerID);

router.route('/showTimeSlot').get(controller.showTimeSlot);
router.route('/getAppointmentRequests').get(controller.getAppointmentRequests);
router.route('/rejectRequest').get(controller.rejectRequest);
router.route('/acceptRequest').get(controller.acceptRequest);



module.exports = router;
