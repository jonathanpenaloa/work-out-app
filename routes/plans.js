const express = require('express');
const router = express.Router();
const plansCtrl = require('../controllers/plans');
const plan = require('../models/plan');

// router.get('/', plansCtrl.index);

router.get('/myplan', plansCtrl.show);

router.post('/plans/:id/notes', plansCtrl.createNote);


module.exports = router;

