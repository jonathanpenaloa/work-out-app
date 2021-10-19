const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

router.get('/', workoutsCtrl.index);

router.get('/:id', workoutsCtrl.show);


//new code to My work out plan page

// router.get('/new', workoutsCtrl.new);

module.exports = router;
