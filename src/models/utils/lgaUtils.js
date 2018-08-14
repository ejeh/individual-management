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
    lga = require('../lga'),
    promise = require('bluebird'),
    _ = require('lodash');
//=============================================================================
/**
 * Create LGA
 */
//=============================================================================
exports.createLga = (doc) => {
    if (_.isEmpty(doc)) {
        return promise.reject("missing fields")
    }
    if (_.isArray(doc)) {
        return state.insertMany(doc);
    }
    else {
        const newLga = new lga(doc)
        return newLga.save();
    };
};
//=============================================================================
/**
 * Delete LGA
 */
//=============================================================================
exports.deleteLga = (filter) => {
    if (_.isEmpty(filter)) {
        return promise.reject("MissingFields");
    }
    return lga.deleteMany(filter)
        .then(result => {
            if (result.n == 0) {
                return promise.reject("ResourceNotExist");
            }
            else if (result.n > 0) {
                return result;
            }
            else if (result.ok !== 1) {
                return promise.reject("BadRequest");
            }
            else {
                log.error("Error cannot delete the resource " + JSON.stringify(result));
                return promise.reject("UnknownError")
            }
        });
};
//=============================================================================
/**
 * get a LGA
 */
//==============================================================================
exports.getLga = (filter) => {
    if (_.isEmpty(filter)) {
        return promise.reject("MissingFields");
    }
    return lga.find(filter)
        .then(result => {
            if (!_.isEmpty(result)) {
                return result;
            }
            else {
                return promise.reject('UnknownError');                
            }
        });
};
//=============================================================================
/**
 * get All LGA
 */
//=============================================================================
exports.getAllLga = (filter) => {
    return lga.find(filter)
    if (!_.isEmpty(result)) {
        return result;
    }
    else {
        return promise.reject('UnknownError')

    };
};
//=============================================================================
/**
 * Update a LGA
 */
//=============================================================================
exports.updateLga = (filter, update) => {
    if (_.isEmpty(filter) || _.isEmpty(update)) {
        return promise.reject("Nothing to update");
    }
    return lga.updateMany(filter, update)
        .then(result => {
            if (result.ok != 1) {
                return promise.reject("BadRequest");
            }
            else if (result.nModified >= 0) {
                return result;
            }
            else {
                return promise.reject('UnknownError')
            }
        })
        .catch(err => {
            return promise.reject(err);
        });
};
