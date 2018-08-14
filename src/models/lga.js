'use strict'
/***********************************
 created by Godfrey on 13-08-2018
 updated by Godfrey on 14-08-2018
 **********************************/
//=============================================================================
/**
 * module depencies
 */
//============================================================================= 
const
    mongoose = require("mongoose");
// MONGOOSE MODEL CONFIGURATION
const lgaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter state name'],

    },
    lgaCode: {
        type: String,
        required: [true, 'Please add your LGA resident code'],
        maxlength: 2
    },
    stateCode: {
        type: String,
        required: [true, 'Please add your state code'],
        maxlength: 2
    }
});

module.exports = mongoose.model('lga', lgaSchema);


