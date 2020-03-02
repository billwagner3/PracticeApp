const mongoose = require('mongoose');



const KeySchema = mongoose.Schema({
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



module.exports = mongoose.model('allKeys', KeySchema);