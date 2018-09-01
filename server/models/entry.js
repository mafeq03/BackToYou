const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema ({
//Date of entry - will be connected with calendar
dateCreated: {type: Date, default:Date.now},
//Using UserId to keep trace of all entries - tied to user profile
userId:{
    type:Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
   //Actual emotion entry
entry: {
    type: String,
    emotion:{
      type:Schema.Types.ObjectId,
      ref: 'Emotion',
      required: true
    },
  //Array of activities 
    activities:[{
      type: Schema.Types.ObjectId,
      ref:'Activity',
      required: true
    }],

  //Comment - to add extra info to daily entry - aprox 500 characters in 200 words
   comment:{
    type: String,
    maxlength: 3000,
      }
    
  }

});
const Entry = mongoose.model('Entry', entrySchema);
module.exports = journalEntry;