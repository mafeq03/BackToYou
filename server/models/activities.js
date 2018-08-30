const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema ({
  name: String,
  image: String,
})


const Activity = mongoose.model('Activity', userSchema);
module.exports = Activity;