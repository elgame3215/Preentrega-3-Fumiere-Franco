const   player = new Player( 'main player' ),
        oponent = new Player( 'oponent' );
        // tanto el jugador como el oponente inician la partida con dos cartas
    for ( let i = 0 ; i < 2 ; i++ ) {
        player.askCard();
        oponent.askCard();
    }