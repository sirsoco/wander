

var db = require("../models");
// var express = require('express');
const router = require('express').Router()
// var cloudinary = require('cloudinary').v2;
// var fileUpload = require('express-fileupload');

// GET ROUTES

// GET ROUTE FOR ALL USERS (to get desired location from all users so that we can incoprporate the location data point from each user object and pass it into the google api call)

// GET route by uid (to view user profile)
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



// POST ROUTES

// POST route for grabbing uid from Google signin
router.post("/user", function (req, res) {
  console.log("REQBODY: ",req.body);
    db.user.create(req.body).then(function(dbuser) {
      res.json(dbuser);
  }) .catch(function (err) {
        res.status(401).json(err);
      });
  });




// PUT route for updating user profile
 router.put("/user/profile/:uid", function(req, res) {
  db.user.update({
      body: req.body.body,
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