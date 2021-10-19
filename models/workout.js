const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {type: String},
  category: {type: String}
});

module.exports = mongoose.model('Workout', workoutSchema);