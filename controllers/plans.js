const Plan = require('../models/plan');
const Workout = require('../models/workout');

module.exports = {
  show,

}


function show(req, res) {

  Plan.findOne({user: req.user._id}).populate('workouts').exec(function (err, plan) {
    res.render('plans/show', { title: "My work out plan", plan: plan});
  });
}

