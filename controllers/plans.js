const Plan = require('../models/plan');
const Workout = require('../models/workout');

module.exports = {
  show,
  createNote,
  deleteNote,
  updateNote

}


function deleteNote(req, res) {
  Plan.findOne({'notes._id': req.params.id, 'notes.user': req.user._id}, function(err, plan) {
    if (!plan || err) return res.redirect('/myplan');
    plan.notes.remove(req.params.id);
    plan.save(function(err) {
      res.redirect('/myplan');
    });
  });
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

function updateNote(req, res) {
  Plan.findOne({'notes._id': req.params.id}, function(err, plan) {
    const note = plan.notes.id(req.params.id);
    note.content = req.body.content;
    plan.save(function(err) {
      res.redirect('/myplan');
    });
  });
}
