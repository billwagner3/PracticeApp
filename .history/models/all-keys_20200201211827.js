const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const KeySchema = new Schema({
    key_id:{
        type: String,
        required: [false]
    },
    key:{
        type: String,
        required: [true, 'Must state key']
    },
    notes:{
        type: String,
        required: [true, 'Must spell key']
    }
});

const allKeys = mongoose.model('All-keys', KeySchema);

module.exports = allKeys;