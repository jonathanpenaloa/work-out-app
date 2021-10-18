const Workout = require('../models/workout');

module.exports = {
    index,
    arm,
};

function arm(req, res) {
    Workout.find({}, function(err, arm) {
        res.render('/arm/index', {title: "Arm workouts", arm} );
    });
}

function index(req, res) {
    Workout.find({}, function(err, workouts) {
        res.render('workouts/index', {title: 'All workouts', workouts});
    });
}

