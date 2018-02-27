/* globals data, loader */
( function() {
    const createSuperheroesList = function( superheroes ) {
        const $list = $( "<ul/>" )
            .addClass( "list" );
        const $itemTemplate = $( "<div/>" )
            .append(
                $( "<li/>" )
                    .addClass( "list-item" )
                    .append(
                        $( "<div/>" )
                            .addClass( "content" )
                    )
                    .append(
                        $( "<img/>" )
                    )
        );

        $( superheroes ).each( function( _, superhero ) {
            $itemTemplate.find( "img" )
                .attr( "src", superhero.imgUrl );
            $itemTemplate.find( ".content" )
                .html( superhero.name );

            $list.append(
                $itemTemplate.html()
            );
        } );

        return $list;
    };

    $( function() {
        loader.show();
        data.getSuperheroes()
            .then( function( superheroes ) {
                const $list = createSuperheroesList( superheroes );
                $( "#root" ).html( $list );
                loader.hide();
            } );
    } );
} )();
