const Plan = require('../models/plan');
const Workout = require('../models/workout');

module.exports = {
    index,
    addToPlan,
    delete: deleteWorkout

};

function deleteWorkout(req, res) {
    Plan.findOne({user: req.user._id}, function(err, plan) {
      plan.workouts.remove(req.params.id);
      plan.save(function(err) {
        res.redirect('/myplan');
      });
    });
}

function addToPlan(req, res) {
    Plan.findOne({user: req.user._id}, function (err, plan) {
        const exists = plan.workouts.some(w => w.equals(req.params.id)); 
        if (exists) return res.redirect('/workouts');
        plan.workouts.push(req.params.id);
        plan.save(function (err) {
            console.log(req.params.id);
            res.redirect(`/myplan`);
        });
    });
}

function index(req, res) {
    Workout.find({}, function(err, workouts) {
        res.render('workouts/index', {title: 'All workouts', workouts});
    });
}

