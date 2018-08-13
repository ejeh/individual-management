'use strict'

// *created by Godfrey on 13-08-2018
// *updated by Godfrey on 13-08-2018


// model dependencies
const
    mongoose                = require("mongoose");


// MONGOOSE MODEL CONFIGURATION
const stateSchema = new mongoose.Schema({
      
    
    name: {
        type: String,
        required: [true, 'Please enter state name'],
       
    },
    stateCode: {
        type: String,
        required: [true, 'Please add your state code'],
        maxlength:2
    }
})

module.exports = mongoose.model('state', stateSchema);


