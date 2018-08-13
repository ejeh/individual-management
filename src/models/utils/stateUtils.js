'use strict';

// *created by Godfrey on 13-08-2018
// *updated by Godfrey on 13-08-2018


const
    state = require('../state'),
    promise = require('bluebird'),
    _ = require('lodash');


//=============================================================================
/**
 * Create State
 */
//=============================================================================

exports.createState = (doc) => {
    if (_.isEmpty(doc)) {
        return promise.reject("missing fields")
    }
    if (_.isArray(doc)) {
        return state.insertMany(doc);
    }
    else {
        const newState = new state(doc)
        return newState.save();
    }
}

//=============================================================================
/**
 * Delete State
 */
//=============================================================================
exports.deleteState = (filter) => {
    if (_.isEmpty(filter)) {
        return Promise.reject("MissingFields");
    }

    return state.deleteMany(filter)
        .then(result => {
            // result = JSON.parse(result);
            if (result.n == 0) {
                return Promise.reject("ResourceNotExist");
            }
            else if (result.n > 0) {
                return result;
            }
            else if (result.ok !== 1) {
                return Promise.reject("BadRequest");
            }
            else {
                log.error("Error cannot delete the resource " + JSON.stringify(result));
                return Promise.reject("UnknownError")
            }
        });
};

//=============================================================================
/**
 * get  a State
 */
//=============================================================================

exports.getState = (filter) => {
    if (_.isEmpty(filter)) {
        return Promise.reject("MissingFields");
    }
    return state.find(filter)
        .then(result => {
            if (!_.isEmpty(result)) {
                return result;
            }
            else {
                return false;
            }
        });
    //=============================================================================
    /**
     * get All State
     */
    //=============================================================================

    exports.getAllStates = (filter) => {
        return state.find(filter)
        if (!_.isEmpty(result)) {
            return result;
        }
        else {
            return false;
        }

    };
};
//=============================================================================
/**
 * Update a State
 */
//=============================================================================
exports.updateState = (filter, update) => {
    if (_.isEmpty(filter) || _.isEmpty(update)) {
        return Promise.reject("Nothing to update");
    }
    return state.updateMany(filter, update)
        .then(result => {
            if (result.ok != 1) {
                return Promise.reject("BadRequest");
            }
            else if (result.nModified >= 0) {
                return result;
            }
            else {
                log.error("Error cannot update the resource " + JSON.stringify(result));
                return Promise.reject('UnknownError')
            }
        })
        .catch(err => {
            return Promise.reject(err);
        });
};
