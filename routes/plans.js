const express = require('express');
const router = express.Router();
const plansCtrl = require('../controllers/plans');

// router.get('/', plansCtrl.index);

router.get('/myplan', plansCtrl.show);





module.exports = router;

