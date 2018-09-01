const mongoose    = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost/backtoyou', {useMongoClient: true});

const Emotion = require('../models/emotions');

const emotions = [
  {
    id: 1,
    name: 'Happy',
    image: '../public/images/emotions/happy.png'  },
  {
    id: 2,
    name: 'Joyful',
    image: '../public/images/emotions/joyful.png'
  },
  {
    id: 3,
    name: 'Neutral',
    image: '../public/images/emotions/neutral.png'
  },
  {
    id: 4,
    name: 'Anxious',
    image: '../public/images/emotions/anxious.png'
  },
  {
    id: 5,
    name: 'Sad',
    image: '../public/images/emotions/sad.png'
  },
    {
      id: 6,
    name: 'Stressed',
    image: '../public/images/emotions/stressed.png'
  },
  {
    id: 7,
    name: 'Angry',
    image: '../public/images/emotions/angry.png'
  }
]

Emotion.create(emotions, (err) =>{
  if(err) {throw(err)}
  console.log(`Created ${emotions.length} emotions`);
  mongoose.connection.close();
});
