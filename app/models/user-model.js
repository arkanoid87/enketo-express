'use strict';

var jwt = require( 'jwt-simple' );
// var debug = require( 'debug' )( 'user-model' );

function getCredentials( req ) {
    let creds = null;
    if ( req.app.get( 'linked form and data server' ).authentication.type.toLowerCase() === 'basic' ) {
        const jwToken = req.signedCookies[ req.app.get( 'authentication cookie name' ) ];
        creds = ( jwToken ) ? jwt.decode( jwToken, req.app.get( 'encryption key' ) ) : null;
    }

    return creds;
}

module.exports = {
    getCredentials: getCredentials
};
