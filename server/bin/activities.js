const mongoose    = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOLAB_GOLD_URI, {useMongoClient: true});

const Emotion = require('../models/emotions');

const emotions = [
  {
    name: 'Sadness',
    image: ''
  },
  {
    name: 'Sadness',
    image: ''
  },
  {
    name: 'Sadness',
    image: ''
  },
  {
    name: 'Sadness',
    image: ''
  },
  {
    name: 'Sadness',
    image: ''
  },
  {
    name: 'Sadness',
    image: ''
  },
  {
    name: 'Sadness',
    image: ''
  }
]

Emotion.create(emotions, (err) =>{
  if(err) {throw(err)}
  console.log(`Created ${emotions.length} emotions`);
  mongoose.connection.close();
});
