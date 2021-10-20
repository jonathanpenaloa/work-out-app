const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const noteSchema = new Schema({
  content: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

});

const planSchema = new Schema({
  workouts: [{
    type: Schema.Types.ObjectId,
    ref: "Workout"
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  notes: [noteSchema]
});

module.exports = mongoose.model('Plan', planSchema);