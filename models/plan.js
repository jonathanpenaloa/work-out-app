const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
  name: {type: String}
});

module.exports = mongoose.model('Plan', planSchema);