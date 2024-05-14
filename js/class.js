class Player {
	constructor( rol ) {
		this.rol = rol;
	}
	cards = [];
	score = 0;
	ases = 0;
	askCard = () => {
		const newCard = randomCard();
		this.cards.push( newCard );
		this.score += newCard;
		if (newCard == 1) {
			this.ases++;
			this.score += 10;
		};

		renderizeLastCardFor( this )

		// si el jugador se pasa de 21, verifico que tenga un as que pueda pasar a valer 1
		if ( this.ases && this.score > 21 ) {
			this.ases--;
			this.score -= 10;
		}
		renderizeUpdatedScoreFor( this );

		const playerMustStand = player.cards.length > 3 || player.score > 21;
		if (playerMustStand) {
			removeAkCardButton();
		}
	}
	stand = () => {
		if ( this.rol == 'main player' ) {
			this.playOponentsTurn()
		} else {
			saveRoundScores()
			renderizeEndGameInterface();
		}
	}
	playOponentsTurn() {
		while ( oponentShouldPlay() ) {
			oponent.askCard();
		}
		oponent.stand()
		function oponentShouldPlay() {
			return oponent.score < player.score && player.score <= 21 && oponent.cards.length < 4;
		}
	}
}