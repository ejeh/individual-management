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
const lgaSchema = new mongoose.Schema({
      
    
    name: {
        type: String,
        required: [true, 'Please enter state name'],
       
    },
    lgaCode: {
        type: String,
        required: [true, 'Please add your LGA resident code'],
        maxlength:2
    },
    stateCode: {
        type: String,
        required: [true, 'Please add your state code'],
        maxlength:2
    },
    tin: String
})

module.exports = mongoose.model('lga', lgaSchema);


