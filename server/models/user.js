
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  name: String,
  email: String,  
  username: String,
  password: String,
  location: String,
  profilePic: {
    type: String, 
    default: 'https://cdn2.iconfinder.com/data/icons/space-8/512/Alien-512.png',
  },
  facebookID: String,
})

const User = mongoose.model('User', userSchema);
module.exports = User;