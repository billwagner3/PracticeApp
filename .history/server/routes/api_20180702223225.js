const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const app = express();
const Key = require('../../models/keys');
const majorKey = require('../../models/majorkeys');
const minorKey = require('../../models/minorkeys');
const allKeys = require('../../models/all-keys');

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

router.get('/all-keys/:notes', function(req, res, next) {
  let checkItOut = allKeys.findOne({ notes: req.params.notes }, 'key').select('-_id')
  .then(function(gotKey) {
    response.data = gotKey;
    // console.log(response);
    res.json(response.data);
    let thisString = JSON.stringify(response.data);
    
  }).catch(next);
  console.log(checkItOut);
})

// this is for retrieving the Key Names to check if right key
router.get('/all-keys/:key', function(req, res, next) {
  allKeys.findOne({ key: req.params.key }, 'key').select('-_id')
  .then(function(gotKey) {
    response.data = gotKey;
    console.log(response);
    res.json(response.data);
    let thisString = JSON.stringify(response.data);
    
  }).catch(next);
})



module.exports = router;