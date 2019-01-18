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