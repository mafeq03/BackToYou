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
    default: 'http://wwwicon-art.info/wp-content/uploads/2017-cheshire-yin-yang-cats-etsy-portraits-of-delicate-cat-yin-yang.jpg',
  },
  facebookID: String,
})

const User = mongoose.model('User', userSchema);
module.exports = User;