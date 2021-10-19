require('dotenv').config();
require('./config/database');
const Workout = require('./models/workout');
const data = require('./data');

Workout.deleteMany({})
.then(function(results) {
  console.log(results);
  return Workout.create(data.workouts);
})
.then(function(workouts) {
    console.log(workouts);
    process.exit();
});