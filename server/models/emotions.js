
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  id: Number,
  name: String,
  image: String,
})




const Emotion = mongoose.model('Emotion', userSchema);
module.exports = Emotion;