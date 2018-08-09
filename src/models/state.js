'use strict'

/*********************************************************
 Author:                Godfrey Ejeh
 Client:                
 Year:                  2018
 File Discription:      Model for end state
/********************************************************/

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


