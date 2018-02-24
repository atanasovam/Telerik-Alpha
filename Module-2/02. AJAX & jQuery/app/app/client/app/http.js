( function( scope ) {
    const makeJsonRequest = function( url, method, body ) {
        return new Promise( ( resolve, reject ) => {
            $.ajax( {
                url: url,
                method: method,
                contentType: "application/json",
                data: JSON.stringify( body ),
                success: resolve,
                error: reject
            } );
        } );
    };

    const getJson = function( url ) {
        return makeJsonRequest( url, "GET", null );
    };

    const postJson = function( url, body ) {
        return makeJsonRequest( url, "POST", body );
    };

    scope.http = {
        getJson: getJson,
        postJson: postJson
    };
} )( window );
