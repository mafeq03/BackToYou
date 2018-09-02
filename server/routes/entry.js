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
  //req.body of entry
  const{dateCreated, userId, entry,comment} = req.body;
  //User id to keep all entries tied to it
    //Emotion to be logged in
  const emotion = req.emotion.id;
  //Activities array as part of entry
  const activities = req.activity.id;
  //Model Constructor used to create new entry
  let newEntry = new Entry({
   dateCreated,
   userId,
   entry,
   comment
 });

  //Adds entry to user's entries array
   req.user.entries.push(newEntry._id);

  //Function to convert entry id to string 
  const id = newEntry._id.toString();
  newEntry.entryId = id;

  //Save new entry and redirects to user's entries
  newEntry.save()
  .then(entry => {
    res.redirect('/entries');
    req.user.save();
  })
})

//Route to view all entries in calendar view
router.get('/', (req, res, next) => {
  Entry.find()
    .then(entries => {
      // console.log(herbs);
      res.render("/entries", { entries });
    })
    .catch(error => {
      console.log(error);
      next();
    })
});


//Route to view a single entry
router.get('/:id', (req, res, next) => {
  let entryId = req.params.id;
  Entry.findOne({'_id': entryId})
    .then(entry => {
      let user = req.session.passport.user;
      res.render("/entry-details", { entry });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});


//Route to edit entry get portion
router.get('/edit', (req, res, next) =>{
  Entries.findOne({_id: req.params.id.entry_id})
  .then((entry) => {
    res.render('entry/edit-entry', {entry});
  })
  .catch((error) =>{
    console.log(error);
    next();
  });
});
//Route to edit entry post portion
router.post('/edit/:id', (req, res, next) => {
  const { dateCreated, userId, entry,comment } = req.body;
  Entry.update({_id: req.query.entry_id}, { $set: {dateCreated, userId, entry,comment }}, { new: true })
  .then((entry) => {
    res.redirect('/entries');
  })
  .catch((error) => {
    console.log(error);
  });
});

//Route to delete entry
router.get('/delete/:id', (req, res, next) =>{
  Entry.findByIdAndRemove(req.params.id)
  .then(entry =>{
    res.redirect('/entries');
  })
  .catch(err =>{
    console.log('Cannot delete entry:', err);
    next();
  });
})