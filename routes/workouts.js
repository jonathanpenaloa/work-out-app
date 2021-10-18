var express = require('express');
var router = express.Router();
var workoutsCtrl = require('../controllers/workouts');

router.get('/', workoutsCtrl.index);

//new code to arms page
router.get('/arm', workoutsCtrl.arm);

module.exports = router;
