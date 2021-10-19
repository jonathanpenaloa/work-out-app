const Plan = require('../models/plan');
const workout = require('../models/workout');

module.exports = {
  show,

}


function show(req,res) {
 Plan.find({}, function(err, plan) {
     res.render('plans/show', {title: 'My work out'});
 });
 }

