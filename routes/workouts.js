const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

router.get('/', workoutsCtrl.index);

router.post('/:id/plan', workoutsCtrl.addToPlan);

router.delete('/:id', workoutsCtrl.delete);


module.exports = router;
