class Player {
	constructor( rol ) {
		this.rol = rol;
	}
	cards = [];
	score = 0;
	isPlaying = true;
	askCard() {
		const newCard = randomCard();
		this.cards.push( newCard );
		this.score += newCard;
		if (this.rol == 'player') {
			renderizeLastPlayerCard()
		} else {
			renderizeLastOponentCard()
		}
	}
	stand() {
		this.isPlaying = false;
		if ( this.rol == 'player' ) {
			playOponentsTurn()
		}
	}
}