const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema ({
  id: Number,
  name: String,
  image: String,
})


const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;