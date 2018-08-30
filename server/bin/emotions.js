const mongoose    = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOLAB_GOLD_URI, {useMongoClient: true});

const Emotion = require('../models/emotions');

const emotions = [
  {
    name: 'Happy',
    image: ''
  },
  {
    name: 'Joyful',
    image: ''
  },
  {
    name: 'Neutral',
    image: ''
  },
  {
    name: 'Anxious',
    image: ''
  },
  {
    name: 'Sad',
    image: ''
  },
    {
    name: 'Stressed',
    image: ''
  },
  {
    name: 'Angry',
    image: ''
  }
]

Emotion.create(emotions, (err) =>{
  if(err) {throw(err)}
  console.log(`Created ${emotions.length} emotions`);
  mongoose.connection.close();
});
