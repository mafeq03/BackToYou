const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose');
//User Model
const User    = require('../models/user.js');
//Emotions Model
const Emotion    = require('../models/emotions.js');
//Activities Model
const Activity    = require('../models/activities');

//Route to create entry
router.post('/new-entry', (req, res, next) =>{
    //User id to keep all entries tied to it
  //req.body of entry
  const theEntry = new Entry ({
     dateCreated: req.body.dateCreated,
     userId: req.body.userId,    
     dailyRecord: req.body.dailyRecord,
     comment: req.body.comment
    });

    //Emotion to be logged in
  const emotion = req.emotion.id;
  //Activities array as part of entry
  const activities = req.activity.id;

  //Adds entry to user's entries array
   req.user.entries.push(newEntry._id);

  //Function to convert entry id to string 
  const id = newEntry._id.toString();
  newEntry.entryId = id;

  //Save new entry to DB
    theEntry.save()
    .then(theEntry => {
      res.json({
        message:'Entry created! We hope to optimize your mood',
        id: theEntry._id
      });
    })
    .catch(error => next(error))  
  });

//Route to view all entries in calendar view
router.get('/entries', (req, res, next) =>{
  //user needs to be called
  entries = user.entries;
  Entry.find(entries)
  .then(entries => {
    if(err){
      res.json(err);
      return;
    }
    res.json(entries);
  })
})

//Route to view a single entry
router.get('/entries/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Entry.findById(req.params.id)
  .then(theEntry => {
      res.json(theEntry);
  })
  .catch(error => next(error));
});


//Route to edit entry
router.put('/entries/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const updates = {
    dateCreated: req.body.dateCreated,
    userId: req.body.userId,    
    dailyRecord: req.body.dailyRecord,
    comment: req.body.comment
  };

  Entry.findByIdAndUpdate(req.params.id, updates)
  .then(entry => {
    res.json({
      message: 'Entry updated successfully'
    });
  }) 
  .catch(error => next(error))     
}) 



//Route to delete entry
router.delete('/delete/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Entry.remove({ _id: req.params.id })
  .then(message => {
    return res.json({
      message: 'Entry has been deleted!'
    });
  })
  .catch(error => next(error));
});

module.exports = router;





