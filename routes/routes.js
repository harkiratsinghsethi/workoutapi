const express = require('express');
const controller = require('../controller/controller.js');
router = express.Router();

router.route('/getExercise').get(controller.getExcercise);

module.exports = router;
