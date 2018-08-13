'use strict';

// *created by Godfrey on 13-08-2018
// *updated by Godfrey on 13-08-2018


//=============================================================================
/**
 * module dependencies
 */
//=============================================================================
const
    http    = require('http'),
    app     = require('./app'),
    log     = require('./utils/logger').getLogger('APP');

//=============================================================================
/**
 * HTTP server instance
 */
//=============================================================================
const server = http.createServer(app);
//=============================================================================
/**
 * Module variables
 */
//=============================================================================
const
    port = app.get('port'),
    env = app.get('env');
//=============================================================================
/**
 * Bind to port
 */
//=============================================================================
server.listen(port, () => {
    log.info('Server up on mode', port, env);
});
//=============================================================================
/**
 * Conditionally export module
 */
//=============================================================================
if(require.main != module) {
    module.exports = server;
}
//=============================================================================
