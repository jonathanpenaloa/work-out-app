const Workout = require('../models/workout');

module.exports = {
    index,
    show,
};



function show(req, res) {
 res.render('workouts/plan', { title: 'My work out', plan})
}


function index(req, res) {
    Workout.find({}, function(err, workouts) {
        res.render('workouts/index', {title: 'All workouts', workouts});
    });
}

