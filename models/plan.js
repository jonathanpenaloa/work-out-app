const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
  workouts: [{
    type: Schema.Types.ObjectId,
    ref: "Workout"
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

});

module.exports = mongoose.model('Plan', planSchema);