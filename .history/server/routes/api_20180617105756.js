const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const app = express();
const Key = require('../../models/keys');
const majorKey = require('../../models/majorkeys');
const minorKey = require('../../models/minorkeys');


// Response handling
let response = {
    status: 200,
    data: [],
    message: 'You got it right mother fucker!'
};


router.get('/keys/:notes', function(req, res, next) {
    
    const result = Key.findOne({ notes: req.params.notes }, 'key').select('-_id')
      .then(function(gotKey) {
        response.data = gotKey;
        console.log(response);
        res.json(response.data);
        let thisString = JSON.stringify(response.data);
        
      }).catch(next);
  })

  router.get('/majorkeys/:notes', function(req, res, next) {
      majorKey.findOne({ notes: req.params.notes }, 'key').select('-_id')
      .then(function(gotKey) {
        response.data = gotKey;
        console.log(response);
        res.json(response.data);
        let thisString = JSON.stringify(response.data);
        
      }).catch(next);
  })

  router.get('/minorkeys/:notes', function(req, res, next) {
    minorKey.findOne({ notes: req.params.notes }, 'key').select('-_id')
    .then(function(gotKey) {
      response.data = gotKey;
      console.log(response);
      res.json(response.data);
      let thisString = JSON.stringify(response.data);
      
    }).catch(next);
})


module.exports = router;