const express = require('express');
const router = express.Router();
const key = require('../../models/keys');
const majorKey = require('../../models/majorkeys');
const minorKey = require('../../models/minorkeys');
const allKeys = require('../../models/all-keys');

// Response handling
let response = {
    status: 200,
    data: [],
    message: ''
};


router.get('/get_keys', function(req, res, next) {

    
  
//     let get_keys = allKeys.find({  }).select('-_id key')
//     .then(allKeys => {
//       response.data = allKeys;
//       console.log('is this response?', response);      
//       res.json(response.data);
//       JSON.stringify(response.data);
//     }).catch(next);
  
// })

router.get('/keys/:notes', function(req, res, next) {
      key.findOne({ notes: req.params.notes }, 'key').select('-_id')
      .then(function(gotKey) {
        // @ts-ignore
        response.data = gotKey;
        console.log(response);
        res.json(response.data);
        JSON.stringify(response.data);
        
      }).catch(next);
  })

  router.get('/majorkeys/:notes', function(req, res, next) {
      majorKey.findOne({ notes: req.params.notes }, 'key').select('-_id')
      .then(function(gotKey) {
        // @ts-ignore
        response.data = gotKey;
        console.log(response);
        res.json(response.data);
        JSON.stringify(response.data);
        
      }).catch(next);
  })

  router.get('/minorkeys/:notes', function(req, res, next) {
    minorKey.findOne({ notes: req.params.notes }, 'key').select('-_id')
    .then(function(gotKey) {
      // @ts-ignore
      response.data = gotKey;
      console.log(response);
      res.json(response.data);
      let thisString = JSON.stringify(response.data);
    }).catch(next);
})

router.get('/all-keys/:notes', function(req, res, next) {
  allKeys.findOne({ notes: req.params.notes }, 'key').select('-_id')
  .then(function(gotKey) {  
    // @ts-ignore 
    response.data = gotKey;    
    res.json(response.data);
    let x = JSON.stringify(response.data);   
    console.log(x);
  }).catch(next);
   
})

// this is for retrieving the Key Names to check if right key
router.get('/all-keys/:key', function(req, res, next) {
  allKeys.findOne({ key: req.params.key }, 'notes').select('-_id')
  .then(function(gotKey) {
    // @ts-ignore
    response.data = gotKey;
    console.log(response);
    res.json(response.data);
    let thisString = JSON.stringify(response.data);
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
  allKeys.find({}).then(function(allkeys){
    res.send(allkeys);
  })
});




module.exports =  router;