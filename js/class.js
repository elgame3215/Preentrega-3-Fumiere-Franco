class Player {
	constructor( rol ) {
		this.rol = rol;
	}
	cards = [];
	score = 0;
	isPlaying = true;
	askCard = () => {
		const newCard = randomCard();
		this.cards.push( newCard );
		this.score += newCard;

		renderizeLastCardFor( this )
		renderizeUpdatedScoreFor( this );

		const playerMustStand = player.cards.length > 3 || player.score > 21;
		if (playerMustStand) {
			removeAkCardButton();
		}
	}
	stand = () => {
		this.isPlaying = false;
		if ( this.rol == 'main player' ) {
			playOponentsTurn()
		}
	}
}