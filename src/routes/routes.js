'use strict';

/*********************************************************
 Authors:               Godfrey Ejeh, Swam Didam Bobby 
 Client:              
 Year:                  2018
 File Discription:      Routing processes
/********************************************************/

/**
 * Dependencies
*/

const
    express  = require('express'),
    log      = require('../utils/logger').getLogger('routes'),
           _ = require('lodash'),
    bcrypt   = require('bcryptjs'),
    crypto   = require('crypto'),
    mongoose = require('mongoose'),
    request  = require('request'),
    state    = require('../models/state'),
    lga    = require('../models/lga');
    // vehicle  = require('../models/utils/vehicleUtils');


/**
 * Router instance
*/

const router = express.Router();




//============================================================================================
// Meant to create State
//============================================================================================


router.post("/createState", function (req, res) {
    return state.create(req.body)
        .then(doc => {
            return res.status(200).json({ message: "State created", doc: doc });
        })
        .catch(err => {
            return res.status(500).json({ message: "Could not create state", err: err });

        })

});

//=============================================================================================
// Search all registered states
//=============================================================================================


router.get("/viewAllState", function (req, res) {
    return state.find({})
    .then(doc => {
        return res.status(200).json({message: "All states",doc:doc});
    })
    .catch(err => {
        return res.status(500).json({message: "Cannot display list", err: err});
    })
    
});

// //=============================================================================================
// //Updating an existing state
// //=============================================================================================

router.put('/updateState/:id', (req, res) => {
    return state.findOneAndUpdate({ _id:req.params.id },
        { $set: req.body })
        .then(doc => {
            log.info("Successfully updated user's details");
            return res.status(200).json({message: "details updated", doc: doc});
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({ message: "Unfortunately an error has occured" });

        });
});




// deleteVehicle -- Meant to delete a state

router.delete('/deleteState/:id', (req, res) => {
    return state.findOneAndRemove({_id:req.params.id})
        .then(doc => {
            log.info("Successfully deleted a state");
            return res.status(200).json({
                status: 200,
                message: "State deleted",
                doc: doc
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(400).json({
                status: 400,
                message: "State not found",
                err: err
            });
        });
});

//============================================================================================
// Meant to create LGA
//============================================================================================


router.post("/createLga", function (req, res) {
    return lga.create(req.body)
        .then(doc => {
            return res.status(200).json({ message: "lga created", doc: doc });
        })
        .catch(err => {
            return res.status(500).json({ message: "Could not create LGA", err: err });

        })

});

//=============================================================================================
// Search all registered LGA
//=============================================================================================

router.get("/viewAllLga", function (req, res) {
    return lga.find({})
    .then(doc => {
        return res.status(200).json({message: "All LGA",doc:doc});
    })
    .catch(err => {
        return res.status(500).json({message: "Cannot display list", err: err});
    })
    
});
// //=============================================================================================
// //Updating an existing LGA 
// //=============================================================================================

router.put('/updateLga/:id', (req, res) => {
    return lga.findOneAndUpdate({ _id:req.params.id },
        { $set: req.body })
        .then(doc => {
            log.info("Successfully updated LGA details");
            return res.status(200).json({message: "details updated", doc: doc});
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({ message: "Unfortunately an error has occured" });

        });
});


//=============================================================================================
// Search all registered state
//=============================================================================================



// deleteVehicle -- Meant to delete a state

router.delete('/deleteLga/:id', (req, res) => {
    return lga.findOneAndRemove({_id:req.params.id})
        .then(doc => {
            log.info("Successfully deleted a LGA");
            return res.status(200).json({
                status: 200,
                message: "LGA deleted",
                doc: doc
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(400).json({
                status: 400,
                message: "LGA not found",
                err: err
            });
        });
});


//=============================================================================
/**
* Module export
*/
//=============================================================================
module.exports = router;


