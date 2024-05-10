function randomCard() {
	return Math.ceil( Math.random() * 11 )
}

function renderizeLastOponentCard() {
	
}

function renderizeLastPlayerCard() {
	
}

function playOponentsTurn() {
	const oponentShouldPlay = oponent.score < player.score && oponent.cards.length < 4;
	while (oponentShouldPlay) {
		oponent.askCard();
	}
	oponent.stand();
}