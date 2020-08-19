

var db = require("../models");
// var express = require('express');
const router = require('express').Router()
// var cloudinary = require('cloudinary').v2;
// var fileUpload = require('express-fileupload');

// POST route for grabbing uid from Google signin
router.post("/user", function (req, res) {
  console.log("REQBODY: ",req.body);
    db.user.create(req.body).then(function(dbuser) {
      res.json(dbuser);
  }) .catch(function (err) {
        res.status(401).json(err);
      });
  });

module.exports = router;