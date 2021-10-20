const Plan = require('../models/plan');
const Workout = require('../models/workout');

module.exports = {
  show,
  createNote,

}


function createNote(req, res) {
  Plan.findById(req.params.id, function(err, plan) {
    req.body.user = req.user._id;
    plan.notes.push(req.body);
    plan.save(function(err) {
      res.redirect('/myplan');
    });
  }); 
}

function show(req, res) {

  Plan.findOne({user: req.user._id}).populate('workouts').exec(function (err, plan) {
    res.render('plans/show', { title: "My work out plan", plan: plan});
  });
}

