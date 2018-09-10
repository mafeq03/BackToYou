const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose');
//User Model
const User    = require('../models/user.js');
//Route to view user profile
router.get('/user/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
}

  User.findById(req.params.id)
  .then(user=>  {res.status(200).json(user)})
  .catch (err => {res.status(500).json(err)})
});

//Route to edit profile - render profile editing page
router.get('/user/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
}
const updates = {
  name,
  email, 
  username,
  password,
  location,
  profilePic,
  entries
} = req.body;

User.findByIdAndUpdate(req.params.id, updates)
  .then(user => {
      res.json({
          message: 'Profile has been updated successfully'
      });
  })
  .catch(error => next(error))
})

//Route to delete profile
router.delete('/user/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  User.remove({ _id: req.params.id })
  .then(message => {
    return res.json({
      message: 'User Profile has been deleted!'
    });
  })
  .catch(error => next(error))
});

module.exports = router;