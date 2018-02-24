/* globals http */

( function( scope ) {
    const SUPERHEROES_KEY = "superheroes";
    const URL = "/api/superheroes";

    const getSuperheroes = function() {
        return http.getJson( URL );
    };

    const getSuperheroDetails = function( id ) {
        return http.getJson( URL + "/" + id );
    };

    const createSuperhero = function( name, secretIdentity, bio, imgUrl ) {
        return http.postJson( URL, { name, secretIdentity, bio, imgUrl } );
    };

    const getSuperheroesLocal = function() {
        const superheroesString = localStorage.getItem( SUPERHEROES_KEY ) || "[]";
        return JSON.parse( superheroesString );
    };

    const createSuperheroLocal = function( name, secretIdentity, bio, imgUrl ) {
        const superheroesString = localStorage.getItem( SUPERHEROES_KEY ) || "[]";
        const superheroes = JSON.parse( superheroesString );
        superheroes.push( {
            name: name,
            secretIdentity: secretIdentity,
             bio: bio,
            imgUrl: imgUrl
        } );

        localStorage.setItem( SUPERHEROES_KEY, JSON.stringify( superheroes ) );
    };

    scope.data = {
        getSuperheroes: getSuperheroes,
        getSuperheroDetails: getSuperheroDetails,
        createSuperhero: createSuperhero,
        getSuperheroesLocal: getSuperheroesLocal,
        createSuperheroLocal: createSuperheroLocal
    };
} )( window );
