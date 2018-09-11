const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose');
//User Model
const User    = require('../models/user.js');
//Entry Model
const Entry    = require('../models/entry');
//Emotions Model
const Emotion    = require('../models/emotions.js');
//Activities Model
const Activity    = require('../models/activities');


/* GET entries*/
router.get('/entries', (req, res, next) => {
  entries = user.entries;
  Entry.find()
  .then((entries, err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(entries);
  })
  .catch(error => next(error));
});

/* CREATE a new Entry */
router.post('/entries', (req, res, next) => {
  const theEntry = new Entry({
    dateCreated: req.body.date,
    dailyRecord:{
      emotion: req.body.emotion,
      activity: req.body.activity,
      comment: req.body.comment,
    },  
 });

 theEntry.save()
  .then(theEntry => {
    res.json({
      message: 'New Entry created!',
        id: theEntry._id
      });
  })
  .catch(error => next(error))
});

/* GET a single Entry. */
router.get('/entries/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Entry.findById(req.params.id)
  .then(theEntry => {
      res.json(theEntry);
  })
  .catch(error => next(error))
});

/* EDIT an Entry. */
router.put('/entries/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const updates = {
    dateCreated: req.body.date,
    dailyRecord:{
      emotion: req.body.emotion,
      activity: req.body.activity,
      comment: req.body.comment,
    }
  };

  Entry.findByIdAndUpdate(req.params.id, updates)
  .then(entry => {
    res.json({
      message: 'Phone updated successfully'
    });
  }) 
  .catch(error => next(error))     
})

/* DELETE an Entry. */
router.delete('/entries/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Entry.remove({ _id: req.params.id })
  .then(message => {
    return res.json({
      message: 'Entry has been removed!'
    });
  })
  .catch(error => next(error));
});

module.exports = router;



