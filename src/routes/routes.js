'use strict';

// *created by Godfrey on 13-08-2018
// *updated by Godfrey on 13-08-2018


/**
 * Dependencies
*/

const
    express = require('express'),
    log = require('../utils/logger').getLogger('routes'),
    _ = require('lodash'),
    bcrypt = require('bcryptjs'),
    crypto = require('crypto'),
    mongoose = require('mongoose'),
    request = require('request'),
    state = require('../models/utils/stateUtils'),
    lga = require('../models/utils/lgaUtils');



/**
 * Router instance
*/

const router = express.Router();
//============================================================================================
// Meant to create State
//============================================================================================

router.post("/createState", function (req, res) {
    return state.createState(req.body)
        .then(doc => {
            return res.status(200).json({
                status: 200,
                message: "State created",
                doc: doc
            });
        })
        .catch(err => {
            return res.status(500).json({
                message: "Could not create state",
                err: err
            });

        })

});
// //=============================================================================================
// //Updating an existing state
// //=============================================================================================

router.put('/updateState', (req, res) => {
    return state.updateState(req.body.filter, req.body.update)
        .then(doc => {
            return res.status(200).json({
                status: 200,
                message: "details updated",
                doc: doc
            });
        })
        .catch(err => {

            return res.status(400).json({
                status: 400,
                message: "Unfortunately an error has occured",
                err: err
            });

        });
});

//Vehicle -- Meant to get a registered state

router.post('/getState', (req, res) => {
    return state.getState(req.body)
        .then(doc => {
            return res.status(200).json({
                status: 200,
                message: "Successfully got a state",
                doc: doc
            });
        })
        .catch(err => {
            return res.status(400).json({
                status: 400,
                message: "Sorry an error has occured",
                err: err
            });
        });
});


//=============================================================================================
// Search all registered states
//=============================================================================================

router.post("/getAllStates", function (req, res) {
    return state.getAllStates(req.body)
        .then(doc => {
            return res.status(200).json({
                status: 200,
                message: "All states",
                doc: doc
            });
        })
        .catch(err => {
            return res.status(500).json({
                status: 200,
                message: "Cannot display list",
                err: err
            });
        })

});

// deleteState -- Meant to delete a state

router.delete('/deleteState', (req, res) => {
    return state.deleteState(req.body)
        .then(doc => {
            return res.status(200).json({
                status: 200,
                message: "State deleted",
                doc: doc
            });
        })
        .catch(err => {
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
    return lga.createLga(req.body)
        .then(doc => {
            return res.status(200).json({
                status: 200,
                message: "lga created",
                doc: doc
            });
        })
        .catch(err => {
            return res.status(400).json({
                status: 400,
                message: "Could not create LGA",
                err: err
            });

        })

});

//=============================================================================================
// get a LGA
//=============================================================================================

router.post("/getLga", function (req, res) {
    return lga.getLga(req.body)
        .then(doc => {
            return res.status(200).json({
                status: 200,
                message: "LGA",
                doc: doc
            });
        })
        .catch(err => {
            return res.status(400).json({
                status: 200,
                message: "Cannot display list",
                err: err
            });
        })

});
//=============================================================================================
// Search all registered LGA
//=============================================================================================

router.post("/getAllLga", function (req, res) {
    return lga.getAllLga(req.body)
        .then(doc => {
            return res.status(200).json({
                status: 200,
                message: "All LGA", doc: doc
            });
        })
        .catch(err => {
            return res.status(400).json({
                status: 200,
                message: "Cannot display list",
                err: err
            });
        })

});
// //=============================================================================================
// //Updating an existing LGA 
// //=============================================================================================

router.put('/updateLga', (req, res) => {
    return lga.updateLga(req.body.filter, req.body.update)
        .then(doc => {
            return res.status(200).json({
                status: 200,
                message: "details updated",
                doc: doc
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({ message: "Unfortunately an error has occured" });

        });
});

// deleteVehicle -- Meant to delete a state

router.delete('/deleteLga', (req, res) => {
    return lga.deleteLga(req.body)
        .then(doc => {
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


