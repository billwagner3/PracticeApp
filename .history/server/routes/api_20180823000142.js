const express = require('express');
const router = express.Router();
const Key = require('../../models/keys');
const majorKey = require('../../models/majorkeys');
const minorKey = require('../../models/minorkeys');
const allKeys = require('../../models/all-keys');

// Response handling
let response = {
    status: 200,
    data: [],
    message: ''
};


router.get('/keys/:notes', function(req, res, next) {
    
      Key.findOne({ notes: req.params.notes }, 'key').select('-_id')
      .then(function(gotKey) {
        response.data = gotKey;
        console.log(response);
        res.json(response.data);
        JSON.stringify(response.data);
        
      }).catch(next);
  })

  router.get('/majorkeys/:notes', function(req, res, next) {
      majorKey.findOne({ notes: req.params.notes }, 'key').select('-_id')
      .then(function(gotKey) {
        response.data = gotKey;
        console.log(response);
        res.json(response.data);
        JSON.stringify(response.data);
        
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

// this is for retrieving the Key Names to check if right key
router.get('/all-keys/:key', function(req, res, next) {
  allKeys.findOne({ key: req.params.key }, 'notes').select('-_id')
  .then(function(gotKey) {
    response.data = gotKey;
    console.log(response);
    res.json(response.data);
    let thisString = JSON.stringify(response.data);
  }).catch(next);
})


router.get('/all-keys/:notes', function(req, res, next) {
  allKeys.findOne({ notes: req.params.notes }, 'key').select('-_id')
  .then(function(gotKey) {   
    response.data = gotKey;    
    res.json(response.data);
    JSON.stringify(response.data);    
  }).catch(next);
   
})


router.get('/all-keys/:key', function (req, res, next) {
  allKeys.find({})
  .then(function (gotKey) {
    response.data = gotKey;
    console.log(response);
    res.json(response.data);
    let thisString = JSON.stringify(response.data);
  })
})


router.get('/all-keys', function(req, res) {
  //Query the DB and if no errors, send all the books
  allKeys.find({}).then(function(allkeys){
    res.send(allkeys);
  })
});




module.exports =  router;