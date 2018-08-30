const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalEntrySchema = new Schema ({
  dateCreated: {type: Date, default:Date.now},
  entry: {
    type: String,
    required: true,
    //aproximately 3000 characters in a 500 word entry
    maxlength: 3000
  }

})
const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);
module.exports = journalEntry;