const mongoose    = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost/backtoyou', {useMongoClient: true});

const Activity = require('../models/activities');

const activities = [
  {
    name: 'Biking',
    image: '../public/images/activities/biking.png'
  },
  {
    name: 'Cleaning',
    image: '../public/images/activities/cleaning.png'
  },
  {
    name: 'Cooking',
    image: '../public/images/activities/cooking.png'
  },
  {
    name: 'Creating/Thinking',
    image: '../public/images/activities/creating.png'
  },
  {
    name: 'Dancing/Party',
    image: '../public/images/activities/dancing.png'
  },
  {
    name: 'Dating',
    image: '../public/images/activities/dating.png'
  },
  {
    name: 'Drinking',
    image: '../public/images/activities/drinking.png'
  },
  {
    name: 'Eating',
    image: '../public/images/activities/eating.png'
  },
  {
    name: 'Fishing',
    image: '../public/images/activities/fishing.png'
  },
  {
    name: 'Gaming',
    image: '../public/images/activities/gaming.png'
  },
  {
    name: 'Homework/Studying',
    image: '../public/images/activities/homework.png'
  },
  {
    name: 'Movies',
    image: '../public/images/activities/Movies.png'
  },
  {
    name: 'Outdoors',
    image: '../public/images/activities/outdoors.png'
  },
  {
    name: 'Pet Time',
    image: '../public/images/activities/pet time.png'
  },
  {
    name: 'Reading',
    image: '../public/images/activities/reading.png'
  },
  {
    name: 'Roller-Blading',
    image: '../public/images/activities/roller-skating.png'
  },
  {
    name: 'Shopping',
    image: '../public/images/activities/shopping.png'
  },
  {
    name: 'Singing',
    image: '../public/images/activities/singing.png'
  },
  {
    name: 'Social Media',
    image: '../public/images/activities/social media.png'
  },
  {
    name: 'Swimming',
    image: '../public/images/activities/swimming.png'
  },
  {
    name: 'Thinking',
    image: '../public/images/activities/thinking.png'
  },
  {
    name: 'Traveling',
    image: '../public/images/activities/traveling.png'
  },
  {
    name: 'Watching Sports',
    image: '../public/images/activities/watching sports.png'
  },
  {
    name: 'Working',
    image: '../public/images/activities/working.png'
  },
  {
    name: 'Working Out',
    image: '../public/images/activities/working out.png'
  },
  {
    name: 'Yoga',
    image: '../public/images/activities/yoga.png'
  }
]

Activity.create(activities, (err) =>{
  if(err) {throw(err)}
  console.log(`Created ${activities.length} activities`);
  mongoose.connection.close();
});
