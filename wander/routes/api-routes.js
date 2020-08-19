var db = require("../models");
// var express = require('express');
const router = require('express').Router()

// var cloudinary = require('cloudinary').v2;
// var fileUpload = require('express-fileupload');

// POST route for grabbing uid from Google signin


router.post("/api/user", function (req, res) {
  console.log(req.body);
    db.user.create({
      uid: req.body.uid
    })
    
      // .then(function () {
      //   res.redirect(307, "/api/login");
      // })
      
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

module.exports = router;