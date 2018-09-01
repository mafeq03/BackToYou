
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



function capitalize (val) {
  if (typeof val !== 'string') val = '';
  return val.charAt(0).toUpperCase() + val.substring(1);
}

const userSchema = new Schema ({
  name: {
    type:String,
    set: capitalize
  },
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