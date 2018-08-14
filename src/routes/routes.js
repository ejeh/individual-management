'use strict';
/***********************************
 created by Godfrey on 13-08-2018
 updated by Godfrey on 14-08-2018
 **********************************/
//=========================================================================================
/**
 * module depencies
 */
//=========================================================================================
const
    express = require('express'),
    _ = require('lodash'),
    bcrypt = require('bcryptjs'),
    crypto = require('crypto'),
    mongoose = require('mongoose'),
    request = require('request'),
    state = require('../models/utils/stateUtils'),
    lga = require('../models/utils/lgaUtils');
//==========================================================================================
/**
 * Router instance
*/
//==========================================================================================
const router = express.Router();
//==========================================================================================
/**
* Meant to create State
*/
//==========================================================================================
router.post("/createState", function (req, res) {
    return state.createState(req.body)
        .then(doc => {
            return res.status(200).json(doc);
        })
        .catch(err => {
            return res.status(500).json(err);

        });
});
//=========================================================================================
/**
 * Updating an existing state
 */
//=========================================================================================
router.put('/updateState', (req, res) => {
    return state.updateState(req.body.filter, req.body.update)
        .then(doc => {
            return res.status(200).json(doc);
        })
        .catch(err => {

            return res.status(500).json(err);
        });
});
//=========================================================================================
/**
 * Vehicle -- Meant to get a registered state
 */
//==========================================================================================
router.post('/getState', (req, res) => {
    return state.getState(req.body)
        .then(doc => {
            return res.status(200).json(doc);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});
//============================================================================================
/** 
 * Search all registered states
 */
//============================================================================================
router.post("/getAllStates", function (req, res) {
    return state.getAllStates(req.body)
        .then(doc => {
            return res.status(200).json(doc);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});
//============================================================================================
/**
 * deleteState -- Meant to delete a state
 */
//============================================================================================
router.delete('/deleteState', (req, res) => {
    return state.deleteState(req.body)
        .then(doc => {
            return res.status(200).json(doc);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});
//============================================================================================
/**
*Meant to create LGA
 */
//============================================================================================
router.post("/createLga", function (req, res) {
    return lga.createLga(req.body)
        .then(doc => {
            return res.status(200).json(doc);
        })
        .catch(err => {
            return res.status(400).json({
                status: 400,
                message: "Could not create LGA",
                err: err
            });
        });
});
//=============================================================================================
/**
 *get a LGA
 */
//=============================================================================================
router.post("/getLga", function (req, res) {
    return lga.getLga(req.body)
        .then(doc => {
            return res.status(200).json(doc);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});
//============================================================================================
/**
 *Search all registered LGA 
 */
//============================================================================================
router.post("/getAllLga", function (req, res) {
    return lga.getAllLga(req.body)
        .then(doc => {
            return res.status(200).json(doc);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});
//=============================================================================================
/**
* Updating an existing LGA 
 */
//=============================================================================================
router.put('/updateLga', (req, res) => {
    return lga.updateLga(req.body.filter, req.body.update)
        .then(doc => {
            return res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json(err);

        });
});
//=============================================================================================
/**
 *deleteVehicle -- Meant to delete a state 
 */
//=============================================================================================
router.delete('/deleteLga', (req, res) => {
    return lga.deleteLga(req.body)
        .then(doc => {
            return res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json(err);
        });
});
//=============================================================================
/**
* Module export
*/
//=============================================================================
module.exports = router;


