const express = require('express');
const router = express.Router();
const plansCtrl = require('../controllers/plans');
const plan = require('../models/plan');


router.get('/myplan', plansCtrl.show);

router.post('/plans/:id/notes', plansCtrl.createNote);

router.delete('/notes/:id', plansCtrl.deleteNote);

router.put('/notes/:id', plansCtrl.updateNote);

module.exports = router;

