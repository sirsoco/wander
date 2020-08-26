var db = require("../models");
// var express = require('express');
const router = require('express').Router()
// var cloudinary = require('cloudinary').v2;
// var fileUpload = require('express-fileupload');

// ***** GET ROUTES ******
// =============================================================

// GET ROUTE FOR ALL USERS (to get desired location from all users so that we can incoprporate the location data point from each user object and pass it into the google api call)


// GET route for retriving all user profiles
router.get("/users", function(req, res) {
  db.user.findAll({
  })
  .then(function(dbuser){             
      res.json(dbuser)
  })
  .catch(function(err) {
      res.json(err)
  })
})


// GET route by uid (to view a specific user's profile)
router.get("/user/profile/:uid", function(req, res) {
  db.user.findAll({
    where: {
      uid: req.params.uid
    }
  })
    .then(function(dbuser) {
      res.json(dbuser);
    });
});


// ***** POST ROUTES ******
// =============================================================


// POST route for grabbing uid from Google signin
router.post("/user", function (req, res) {
  console.log("POST ROUTE REQBODY: ", req.body);
    db.user.create(req.body)
    .then(function(dbuser) {
      res.json(dbuser);
    }).catch(function (err) {
      console.log('USER CREATE ERROR: ', err)
        res.status(401).json(err);
      });
  });


// ***** PUT ROUTES ******
// =============================================================

// PUT route by uid for updating a specific user's profile
 router.put("/user/profile/:uid", function(req, res) {
  console.log("PUT ROUTE REQBODY: ", req.body);
    db.user.update({
      name: req.body.name,
      age: req.body.age,
      career: req.body.career,
      education: req.body.education,
      currentLocation: req.body.currentLocation,
      hobbies: req.body.hobbies,
      destination: req.body.destination,
      photoURL: req.body.photoURL
    },
    {
      where: {
        uid: req.params.uid
      }
    })
    .then(function(dbuser) {
      res.json(dbuser);
    });
});

module.exports = router;